export default function TabelSiswa({ data, onEdit, onHapus }) {
  return (
    <table border="1" cellPadding="6">
      <thead>
        <tr>
          <th>Kode</th><th>Nama</th><th>Alamat</th><th>Tgl Lahir</th><th>Jurusan</th><th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((s) => (
          <tr key={s.kode_siswa}>
            <td>{s.kode_siswa}</td>
            <td>{s.nama_siswa}</td>
            <td>{s.alamat_siswa}</td>
            <td>{s.tanggal_lahir?.slice(0, 10)}</td>
            <td>{s.jurusan}</td>
            <td>
              <button onClick={() => onEdit(s)}>Edit</button>
              <button onClick={() => onHapus(s.kode_siswa)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
