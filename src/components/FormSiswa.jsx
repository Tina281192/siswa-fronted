import { useState, useEffect } from 'react';

const kosong = { kode_siswa: '', nama_siswa: '', alamat_siswa: '', tanggal_lahir: '', jurusan: '' };

export default function FormSiswa({ onSubmit, dataEdit, onBatal }) {
  const [form, setForm] = useState(kosong);

  useEffect(() => {
    setForm(
      dataEdit
        ? { ...dataEdit, tanggal_lahir: dataEdit.tanggal_lahir?.slice(0, 10) || '' }
        : kosong
    );
  }, [dataEdit]);

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const kirim = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(kosong);
  };

  return (
    <form onSubmit={kirim}>
      <input
        name="kode_siswa"
        placeholder="Kode (mis: S004)"
        value={form.kode_siswa}
        onChange={ubah}
        disabled={!!dataEdit}
        required
      />
      <input name="nama_siswa" placeholder="Nama" value={form.nama_siswa} onChange={ubah} required />
      <input name="alamat_siswa" placeholder="Alamat" value={form.alamat_siswa} onChange={ubah} />
      <input type="date" name="tanggal_lahir" value={form.tanggal_lahir} onChange={ubah} />
      <input name="jurusan" placeholder="Jurusan" value={form.jurusan} onChange={ubah} />
      <button type="submit">{dataEdit ? 'Simpan Perubahan' : 'Tambah'}</button>
      {dataEdit && <button type="button" onClick={onBatal}>Batal</button>}
    </form>
  );
}
