
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as FilterConstants from "./Filters/Constants";

// ------------------------------------------------------------
// Парсим фильтры из URL → объект filtersState
// ------------------------------------------------------------
const parseFiltersFromUrl = (params, filtersDefinition) => {
  const state = {};

  filtersDefinition.forEach(filter => {
    const name = filter.name;

    if (filter.type === FilterConstants.FilterType.multiCheckbox) {
      const values = params.getAll(name); // brand=carhartt&brand=vans
      state[name] = values ?? [];
    }

    if (filter.type === FilterConstants.FilterType.range) {
      const min = params.get(`${name}_min`) || "";
      const max = params.get(`${name}_max`) || "";
      state[name] = { min, max };
    }
  });

  return state;
};

// ------------------------------------------------------------
// Генерация QueryString из filtersState
// ------------------------------------------------------------
const buildQueryString = (filtersState) => {
  const params = new URLSearchParams();

  Object.entries(filtersState).forEach(([name, value]) => {
    if (Array.isArray(value)) {
      // MultiCheckbox
      value.forEach(v => {
        if (v !== "") params.append(name, v);
      });
    } else if (typeof value === "object" && value !== null) {
      // Range
      if (value.min !== "") params.set(`${name}_min`, value.min);
      if (value.max !== "") params.set(`${name}_max`, value.max);
    }
  });

  return params.toString();
};

// ------------------------------------------------------------
// ХУК useUrlFilters
// ------------------------------------------------------------
export const useUrlFilters = (filtersDefinition) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [filtersState, setFiltersState] = useState({});
  const [initialized, setInitialized] = useState(false);

  // --------------------------------------------------------
  // 1. Ждём загрузки структуры фильтров + восстанавливаем из URL
  // --------------------------------------------------------
  useEffect(() => {
    if (!filtersDefinition?.length) return;

    // Создаем дефолтное состояние
    const defaultState = {};
    filtersDefinition.forEach(f => {
      if (f.type === FilterConstants.FilterType.multiCheckbox) {
        defaultState[f.name] = [];
      }
      if (f.type === FilterConstants.FilterType.range) {
        defaultState[f.name] = { min: "", max: "" };
      }
    });

    // Парсим URL → state
    const params = new URLSearchParams(location.search);
    const restored = parseFiltersFromUrl(params, filtersDefinition);

    setFiltersState({ ...defaultState, ...restored });
    setInitialized(true);
  }, [filtersDefinition, location.search]);

  // --------------------------------------------------------
  // 2. Обновляем URL при изменении filtersState
  // --------------------------------------------------------
  useEffect(() => {
    if (!initialized) return;

    const query = buildQueryString(filtersState);
    const current = location.search.replace(/^\?/, "");

    // Если URL уже в актуальном состоянии → ничего не делаем
    if (query === current) return;

    navigate(`?${query}`, { replace: true });

  }, [navigate, filtersState, initialized, location.search]);

  // --------------------------------------------------------
  // 3. API для изменения фильтров
  // --------------------------------------------------------
  const setFilter = (name, value) => {
    setFiltersState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    filtersState,
    setFilter,
    initialized
  };
};
