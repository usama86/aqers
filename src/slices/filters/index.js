import { HYDRATE } from 'next-redux-wrapper'
import { createSlice } from '@reduxjs/toolkit'
import { PAGE_SIZE } from 'utils/Constant'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    loading: false,
    error: '',
    filter: {
      city: { name: 'islamabad', id: 1 },
      areaList: [],
      purpose: 'rent',
      sort: 1,
      bed: ['Any'],
      bathroom: ['Any'],
      category: 'Residential',
      type: null,
      minPrice: 0,
      maxPrice: null,
      sizeUnit: 'Marla',
      minSize: 0,
      maxSize: null,
      sizeError: false,
      priceError: false,
      propsureVerified: false,
      agency: [],
      features: null,
      isViewed: false,
      condition: '',
      pageSize: PAGE_SIZE,
      page: 1,
    },
  },
  reducers: {
    updateFilterError(state, action) {
      const { type, error } = action.payload
      switch (type) {
        case 'price': {
          state.filter.priceError = error
          break
        }
        case 'area': {
          state.filter.sizeError = error
          break
        }
      }
    },
    setFilterOrder(state, action) {
      state.filter.sort = action.payload
    },
    addBed(state, action) {
      state.filter.bed = action.payload
    },
    addBathroom(state, action) {
      state.filter.bathroom = action.payload
    },
    setPropertyCategory(state, action) {
      state.filter.category = action.payload
    },
    setPropertyType(state, action) {
      state.filter.type = action.payload
    },
    setIsViewed(state, action) {
      state.filter.isViewed = action.payload
    },
    updateCondition(state, action) {
      state.filter.condition = action.payload
    },
    updatePropsureVerified(state, action) {
      state.filter.propsureVerified = action.payload
    },
    updateAgencyList(state, action) {
      state.filter.agency = action.payload
    },
    updateMinPrice(state, action) {
      state.filter.minPrice = action.payload
    },
    updateMaxPrice(state, action) {
      state.filter.maxPrice = action.payload
    },
    updateSizeUnit(state, action) {
      state.filter.sizeUnit = action.payload
    },
    updateMinSize(state, action) {
      state.filter.minSize = action.payload
    },
    updateMaxSize(state, action) {
      state.filter.maxSize = action.payload
    },
    updateAreaList(state, action) {
      state.filter.areaList = action.payload
    },
    updateCity(state, action) {
      state.filter.city = action.payload
    },
    updatePurpose(state, action) {
      state.filter.purpose = action.payload
    },
    updateFeatures(state, action) {
      state.filter.features = action.payload
    },
    updateCurrentPage(state, action) {
      state.filter.page = action.payload
    },
    updatePageSize(state, action) {
      state.filter.pageSize = action.payload
    },
    updateLoader(state, action) {
      state.loading = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // debugger
      return (state = {
        ...state,
        ...action.payload.filter,
      })
    },
  },
})

export const selectFilterState = (state) => state.filter

export const {
  setFilterOrder,
  addBed,
  addBathroom,
  setPropertyCategory,
  setPropertyType,
  setIsViewed,
  updateCondition,
  updatePropsureVerified,
  updateAgencyList,
  updateMinPrice,
  updateMaxPrice,
  updateMinSize,
  updateMaxSize,
  updateSizeUnit,
  updateAreaList,
  updateCity,
  updatePurpose,
  updateFeatures,
  updateCurrentPage,
  updatePageSize,
  updateLoader,
  updateFilterError,
} = filterSlice.actions
export default filterSlice.reducer
