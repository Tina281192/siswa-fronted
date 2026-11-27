import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/siswa' });

export const getSiswa = () => API.get('/');
export const tambahSiswa = (data) => API.post('/', data);
export const ubahSiswa = (id, data) => API.put(`/${id}`, data);
export const hapusSiswa = (id) => API.delete(`/${id}`);