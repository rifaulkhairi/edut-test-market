import React, { useState } from 'react';
import { Button } from '@mui/material';

const DetailSoal = ({ soal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="container flex p-4 m-auto">
      <div className='contsoal  flex-1 p-10 rounded-xl shadow-xl'>
        <h2 className='font-semibold'>Soal Nomor 1</h2>
        <h5 className='my-5'>Siapakah Penemu Bola Lampu?</h5>
        <div className="pilihan h-auto">
          <ul className="space-y-2">
            <li className='h-auto w-full bg-blue-gray-100 p-2 rounded-2xl'>A Newton</li>
            <li className='h-auto w-full bg-blue-gray-100 p-2 rounded-2xl'>B Archimedes</li>
            <li className='h-auto w-full bg-blue-gray-100 p-2 rounded-2xl'>C Galileo</li>
            <li className='h-auto w-full bg-blue-gray-100 p-2 rounded-2xl'>D Kepler</li>
            <li className='h-auto w-full bg-blue-gray-100 p-2 rounded-2xl'>E Thomas Alfa Edison</li>
          </ul>
          <div className="navigasi flex gap-2 mt-4">
            <div className="back bg-secondary text-white w-auto h-auto p-2 rounded-3xl">
              <button onClick={prevQuestion}>Sebelumnya</button>
            </div>
            <div className="next bg-secondary text-white w-auto h-auto p-2 rounded-3xl">
              <button onClick={nextQuestion}>Selanjutnya</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sisikanan w-autoflex flex-col p-4">
        <div className="waktu shadow-lg rounded-2xl">
          <h1 className=' font-bold ml-4 mt-2'>Sisa Waktu</h1>
          <div className="waktu grid grid-flow-col p-4 text-white">
            <div className="jam h-14 w-14   bg-tertiary rounded-lg flex items-center justify-center">_</div>
            <div className="menit h-14 w-14 bg-tertiary rounded-lg flex items-center justify-center">_</div>
            <div className="detik h-14 w-14 bg-tertiary rounded-lg flex items-center justify-center">_</div>
          </div>
        </div>
        <div className="akhiri py-2 bg-secondary text-white m-2 rounded-full cursor-pointer hover:shadow-md flex items-center justify-center font-bold">
          <h1> AKHIRI UJIAN</h1>
        </div>
        <div className="tipe shadow-xl rounded-2xl  ">
          <div className="tes m-4 grid gap-1 py-4">
          <h1 className='font-bold'>Pilih Tipe tes</h1>
          <div className="twk p-2 bg-tertiary text-xs flex justify-between items-center text-white rounded-lg">
                Tes Wawasan Kebangsaan
                <div className="persen h-10 w-10 border border-white rounded-full">
                </div>
              </div>
              <div className="twk p-2 bg-tertiary text-xs flex justify-between items-center text-white rounded-lg">
                Tes Intelegensi Umum
                <div className="persen h-10 w-10 border border-white rounded-full">
                </div>
              </div>
              <div className="twk p-2 bg-tertiary text-xs flex justify-between items-center text-white rounded-lg">
                Tes Karakteristik Pribadi
                <div className="persen h-10 w-10 border border-white rounded-full">
                </div>
              </div>
          </div>
          
        </div>
        <div className="daftar  p-4 bg-white  rounded-2xl">
        <h1 className='font-bold py-2'>Daftar Soal</h1>
          <div className="bks grid grid-cols-5 gap-1">
          {Array.from({ length: 30 }, (_, i) => (
            <button key={i + 1} className="number-div p-2 text- hover:scale-110 bg-red-500 text-center rounded-md">{i + 1}</button>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSoal;
