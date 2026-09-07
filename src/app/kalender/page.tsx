"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import { Card } from "@/components/ui/Card";
import "./calendar-overrides.css";
import { Calendar as CalendarIcon, MapPin, Clock, CalendarX2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const dummyEvents = [
  { id: 1, date: new Date(), title: "Ibadah Tengah Minggu", time: "19:30", location: "Gedung Gereja Utama" },
  { id: 2, date: new Date(new Date().setDate(new Date().getDate() + 2)), title: "Latihan Paduan Suara", time: "18:00", location: "Ruang Serbaguna" },
  { id: 3, date: new Date(new Date().setDate(new Date().getDate() + 4)), title: "Ibadah Minggu", time: "08:00 & 10:30", location: "Gedung Gereja Utama" },
];

export default function Kalender() {
  const [value, onChange] = useState<Value>(new Date());
  
  // Dummy error state for Supabase fetch failure
  const isError = false;

  const selectedDate = Array.isArray(value) ? value[0] : value;
  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  };

  const eventsForSelectedDate = selectedDate
    ? dummyEvents.filter(event => isSameDay(event.date, selectedDate))
    : [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container py-16"
    >
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Kalender Kegiatan</h1>
        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Jadwal lengkap kegiatan pelayanan, ibadah, dan persekutuan di GKPI.
        </p>
        <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full mt-6"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* Calendar Widget */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-end"
        >
          <Card className="flex items-center justify-center p-4 md:p-8 overflow-hidden w-full max-w-2xl">
            <div className="w-full overflow-hidden">
              <Calendar
                onChange={onChange}
                value={value}
                className="custom-calendar w-full border-none!"
                tileContent={({ date, view }) => {
                  if (view === "month") {
                    const hasEvent = dummyEvents.some(event => isSameDay(event.date, date));
                    return hasEvent ? (
                      <div className="flex justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                      </div>
                    ) : null;
                  }
                }}
              />
            </div>
          </Card>
        </motion.div>

        {/* Selected Date Events */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-full min-h-[400px] w-full max-w-2xl">
            {isError ? (
              <div className="bg-red-100 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                <p className="text-red-700 font-medium mb-4">Gagal memuat data jadwal dari pangkalan data.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
                  Coba Lagi
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2 block">Agenda Acara</span>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-[var(--color-primary)] inline-block pb-1 pr-4">
                    {selectedDate ? selectedDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : "Pilih Tanggal"}
                  </h2>
                </div>

                <div className="space-y-6">
                  {eventsForSelectedDate.length > 0 ? (
                    eventsForSelectedDate.map(event => (
                      <div key={event.id} className="group flex items-start gap-4">
                        <div className="min-w-[4px] h-[24px] bg-[var(--color-primary)] rounded-full mt-1 group-hover:scale-110 transition-transform duration-300 origin-top"></div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2 text-gray-900">{event.title}</h3>
                          <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                            <Clock size={16} />
                            <span>{event.time} WIB</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center py-16 h-full">
                      <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                        <CalendarX2 size={32} className="text-gray-300" />
                      </div>
                      <p className="text-gray-500 text-lg">Belum ada persekutuan yang diagendakan pada tanggal ini.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
