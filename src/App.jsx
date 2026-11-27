import { useState, useEffect } from 'react';
import { getSiswa, tambahSiswa, ubahSiswa, hapusSiswa } from './api/siswaApi';
import FormSiswa from './components/FormSiswa';
import TabelSiswa from './components/TabelSiswa';

export default function App() {
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);

  const muat = async () => {
    const res = await getSiswa();
    setData(res.data);
  };

  useEffect(() => { muat(); }, []);

  const simpan = async (form) => {
    if (dataEdit) await ubahSiswa(dataEdit.kode_siswa, form);
    else await tambahSiswa(form);
    setDataEdit(null);
    muat();
  };

  const hapus = async (id) => {
    if (confirm('Hapus data ini?')) {
      await hapusSiswa(id);
      muat();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Data Siswa</h1>
      <FormSiswa onSubmit={simpan} dataEdit={dataEdit} onBatal={() => setDataEdit(null)} />
      <TabelSiswa data={data} onEdit={setDataEdit} onHapus={hapus} />
    </div>
  );
}