import { create } from 'zustand';

const HospitalPaginationStore = create((set, get) => ({
  currentPage: 1,
  itemsPerPage: 9,
  setCurrentPage: (page) => set({ currentPage: page }),
  totalPages: (hospital) => Math.ceil(hospital.length / get().itemsPerPage),
  startIndex: () => (get().currentPage - 1) * get().itemsPerPage,
  endIndex: (hospital) => get().startIndex(hospital) + get().itemsPerPage,
  currentItems: (hospital) => hospital.slice(get().startIndex(hospital), get().endIndex(hospital)),
}));

export default HospitalPaginationStore;
