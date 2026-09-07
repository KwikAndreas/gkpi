import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { supabase } from "../api/supabase";
import SEOComponent from "../components/SEOComponent";
import type { Value } from "react-calendar/src/shared/types.js";

type Kalenders = {
  id: string;
  tanggal: string; // YYYY-MM-DD
  acara: string;
};

type EventData = {
  id: string;
  date: Date;
  title: string;
};

const dateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Kalender: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [events, setEvents] = useState<EventData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchKalenderData = async () => {
    try {
      const { data, error } = await supabase
        .from("kalender")
        .select("id, tanggal, acara")
        .order("tanggal", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        const formattedEvents: EventData[] = data.map((item: Kalenders) => ({
          id: item.id,
          date: new Date(item.tanggal),
          title: item.acara,
        }));

        setEvents(formattedEvents);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat mengambil data",
      );
      console.error("Error fetching calendar data:", err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchKalenderData();
      if (events.length === 0) {
        await migrateInitialData();
        await fetchKalenderData();
      }
    };

    loadData();
  }, []);

  const migrateInitialData = async () => {
    try {
      const { data, error } = await supabase
        .from("kalender")
        .select("id")
        .limit(1);

      if (error) throw error;

      if (data && data.length === 0) {
        const sampleEvents = [
          { date: new Date(2025, 4, 25), title: "Ibadah Kenaikan Tuhan Yesus" },
          { date: new Date(2025, 5, 2), title: "Persekutuan Komsel Gabungan" },
          { date: new Date(2025, 5, 9), title: "Bakti Sosial Jemaat" },
          { date: new Date(2025, 5, 15), title: "Rapat Majelis Gereja" },
        ];

        for (const event of sampleEvents) {
          await addEvent(event.date, event.title);
        }

        // console.log("Sampel data berhasil dimigrasi ke Supabase");
      }
    } catch (err) {
      console.error("Error during data migration:", err);
    }
  };

  const handleCalendarChange = (newValue: Value) => {
    if (newValue instanceof Date) {
      onChange(newValue);
    } else if (Array.isArray(newValue) && newValue.length > 0) {
      onChange(newValue[0]);
    }
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const hasEvent = events.some(
        (event) =>
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear(),
      );
      return hasEvent ? (
        <div className="flex justify-center items-center mt-1">
          <span
            className="w-2 h-2 rounded-full bg-[#ce9226]"
          ></span>
        </div>
      ) : null;
    }
    return null;
  };

  const getEventDetails = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    );
  };

  const addEvent = async (date: Date, title: string) => {
    try {
      const formattedDate = dateToYYYYMMDD(date);

      const { data, error } = await supabase
        .from("kalender")
        .insert([{ tanggal: formattedDate, acara: title }])
        .select();

      if (error) throw error;

      if (data) {
        await fetchKalenderData();
        return true;
      }
    } catch (err) {
      console.error("Error adding event:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat menambahkan acara",
      );
      return false;
    }
  };

  const selectedDate = value instanceof Date ? value : new Date();
  const selectedDayEvents = getEventDetails(selectedDate);

  return (
    <>
      <SEOComponent
        defaultTitle="Kalender Kegiatan - GKI Cipinang Indah"
        defaultDescription="Kalender kegiatan dan acara GKI Cipinang Indah Jakarta Timur. Temukan jadwal lengkap kegiatan gereja, perayaan, persekutuan, dan acara khusus jemaat."
        defaultKeywords="Kalender GKI Cipinang Indah, Kegiatan Gereja, Jadwal Acara Gereja, Event Gereja, GKI Jakarta Timur"
        defaultCanonical="https://gkicinda.id/kalender"
        defaultImage="https://gkicinda.id/gkicinda.png"
        defaultType="website"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto p-4 md:p-8 max-w-6xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Kalender Kegiatan
          </h1>
          <div className="w-24 h-1 bg-[#ce9226] mx-auto rounded-full"></div>
        </div>

        {error && (
          <div className="text-center my-4 p-4 bg-red-100 text-red-700 rounded-xl shadow-sm max-w-lg mx-auto">
            <p className="font-medium">Error: {error}</p>
            <button
              onClick={fetchKalenderData}
              className="mt-3 px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-full font-semibold transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-stretch mt-8">
          {/* Kalender Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <Calendar
              onChange={handleCalendarChange}
              value={value}
              tileContent={tileContent}
            />
          </motion.div>

          {/* Event Details Card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-lg border border-gray-100 shadow-sm flex flex-col h-full min-h-[400px]">
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  Agenda Acara
                </h2>
                <div className="text-3xl font-bold text-gray-900 border-b-2 border-[#ce9226] pb-4 inline-block">
                  {selectedDate.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </div>
              </div>
              
              <div className="flex-grow flex flex-col">
                {selectedDayEvents.length > 0 ? (
                  <ul className="space-y-6">
                    {selectedDayEvents.map((event, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="min-w-[4px] h-[24px] mt-1 mr-5 bg-[#ce9226] rounded-full group-hover:scale-110 transition-transform"></div>
                        <span className="text-gray-800 font-medium text-xl">
                          {event.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full flex-grow py-12">
                    <div className="w-16 h-16 mb-4 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                      <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-center px-4">
                      Belum ada kegiatan yang dijadwalkan pada tanggal ini.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
export default Kalender;
