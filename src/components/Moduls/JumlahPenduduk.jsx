import React from 'react'
import CardPenduduk from '@/components/Elements/CardPenduduk'

const JumlahPenduduk = () => {
  return (
    <div className="h-screen p-20 pt-30">
        <div className="font-semibold text-4xl text-accent mt-4 mb-4">
          Jumlah Penduduk
        </div>
        <div className="">
          <CardPenduduk />
        </div>
      </div>
  )
}

export default JumlahPenduduk