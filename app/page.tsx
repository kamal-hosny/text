'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  ReferenceLine,
} from 'recharts';

const cardsData = [
  {
    title: "الاعلانــات",
    value: 470,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="white" />
        <g clipPath="url(#clip0_4_4)">
          <path d="M21.75 22.5C22.5784 22.5 23.25 21.8284 23.25 21C23.25 20.1716 22.5784 19.5 21.75 19.5C20.9216 19.5 20.25 20.1716 20.25 21C20.25 21.8284 20.9216 22.5 21.75 22.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24.75 16.5H21.75C18 16.5 16.5 18 16.5 21.75V26.25C16.5 30 18 31.5 21.75 31.5H26.25C30 31.5 31.5 30 31.5 26.25V22.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26.8125 18.75H30.9375" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28.875 20.8125V16.6875" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17.0026 29.2126L20.7001 26.7301C21.2926 26.3326 22.1476 26.3776 22.68 26.8351L22.9275 27.0526C23.5125 27.5551 24.4575 27.5551 25.0425 27.0526L28.1625 24.3751C28.7475 23.8726 29.6925 23.8726 30.2775 24.3751L31.5 25.4251" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4_4">
            <rect width="18" height="18" fill="white" transform="translate(15 15)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: "الاعلانــات",
    value: 470,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3_32)">
          <path d="M6.75 7.5C7.57845 7.5 8.25 6.82843 8.25 6C8.25 5.17157 7.57845 4.5 6.75 4.5C5.92157 4.5 5.25 5.17157 5.25 6C5.25 6.82843 5.92157 7.5 6.75 7.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.75 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V7.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.8125 3.75H15.9375" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13.875 5.8125V1.6875" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2.0025 14.2126L5.7 11.7301C6.2925 11.3326 7.1475 11.3776 7.67997 11.8351L7.92747 12.0526C8.51247 12.5551 9.45747 12.5551 10.0425 12.0526L13.1625 9.37507C13.7475 8.87257 14.6925 8.87257 15.2775 9.37507L16.5 10.4251" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_3_32">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: "العملاء",
    value: 4.275,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="white" />
        <g clipPath="url(#clip0_3_48)">
          <path d="M28.605 31.215C27.945 31.41 27.165 31.5 26.25 31.5H21.75C20.835 31.5 20.055 31.41 19.395 31.215C19.56 29.265 21.5625 27.7275 24 27.7275C26.4375 27.7275 28.44 29.265 28.605 31.215Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26.25 16.5H21.75C18 16.5 16.5 18 16.5 21.75V26.25C16.5 29.085 17.355 30.6375 19.395 31.215C19.56 29.265 21.5625 27.7275 24 27.7275C26.4375 27.7275 28.44 29.265 28.605 31.215C30.645 30.6375 31.5 29.085 31.5 26.25V21.75C31.5 18 30 16.5 26.25 16.5ZM24 25.6275C22.515 25.6275 21.315 24.42 21.315 22.935C21.315 21.45 22.515 20.25 24 20.25C25.485 20.25 26.685 21.45 26.685 22.935C26.685 24.42 25.485 25.6275 24 25.6275Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26.685 22.935C26.685 24.42 25.485 25.6275 24 25.6275C22.515 25.6275 21.315 24.42 21.315 22.935C21.315 21.45 22.515 20.25 24 20.25C25.485 20.25 26.685 21.45 26.685 22.935Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_3_48">
            <rect width="18" height="18" fill="white" transform="translate(15 15)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: "استقبــال العروض",
    value: 559,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3_64)">
          <path d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.03 2.26501L6.12 8.175C5.895 8.4 5.67 8.8425 5.625 9.165L5.3025 11.4225C5.1825 12.24 5.76 12.81 6.5775 12.6975L8.835 12.375C9.15 12.33 9.5925 12.105 9.825 11.88L15.735 5.97001C16.755 4.95001 17.235 3.76501 15.735 2.26501C14.235 0.765006 13.05 1.24501 12.03 2.26501Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.1825 3.11243C11.685 4.90493 13.0875 6.30743 14.8875 6.81743" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_3_64">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
];

const visitsData = [
  { month: 'JAN', visits: 4 },
  { month: 'FEB', visits: 3.5 },
  { month: 'MAR', visits: 4.5 },
  { month: 'APR', visits: 8 },
  { month: 'MAY', visits: 5 },
  { month: 'JUN', visits: 4 },
];

const ordersData = [
  { name: 'طلب جديد', value: 300 },
  { name: 'المفاوضات', value: 150 },
  { name: 'تمت البيعة', value: 450 },
  { name: 'الغيت البيعة', value: 100 },
];

const COLORS = ['#009877', '#ffeb3b', '#34b3f1', '#e91e63'];

export default function Dashboard() {
  return (
    <main className="bg-white min-h-screen p-6 pt-24">
      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div key={index} className="card bg-[#f8f8f8] rounded-[40px] p-6">
            <div className="head flex justify-between items-center">
              <span className="font-bold">{card.title}</span>
              <span className="h-12 w-12 flex justify-center items-center bg-white rounded-full">
                {card.icon}
              </span>
            </div>

            <p className="font-extrabold text-[48px] text-[#009877] mt-4">{card.value}</p>

            <div className="flex items-center justify-between mt-4">
              <span></span>
              <div className="bg-black cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 8.5L3.5 3.5M3.5 3.5V8M3.5 3.5H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
{/* Line Chart - Enhanced Design */}
<div className="bg-[#f8f8f8] rounded-[40px] p-6 h-full flex flex-col">
  {/* Header Section */}
  <div className="flex justify-between items-start mb-6">
    <div className="flex flex-col">
      <h2 className="text-right font-bold text-xl text-[#333]">عدد الزيارات على الموقع الإلكتروني</h2>
      <p className="text-right text-sm text-gray-500 mt-1">آخر 6 أشهر - تحديث يومي</p>
    </div>
    <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
      <span className="text-sm text-[#555]">2023</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 6.5L8 4L10.5 6.5" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 9.5L8 12L10.5 9.5" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
  
  {/* Chart Container - Full Height */}
  <div className="flex-1 min-h-[250px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={visitsData}
        margin={{ top: 20, right: 15, left: 15, bottom: 20 }}
      >
        {/* Gradient Background */}
        <defs>
          <linearGradient id="chartBackground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8f8f8" stopOpacity={1}/>
            <stop offset="100%" stopColor="#f8f8f8" stopOpacity={1}/>
          </linearGradient>
        </defs>
        
        {/* Grid Lines */}
        <CartesianGrid 
          vertical={false} 
          stroke="#E5E5E5" 
          strokeDasharray="0"
          horizontal={true}
        />
        
        {/* X Axis */}
        <XAxis 
          dataKey="month" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#666', fontSize: 12, fontWeight: 500 }}
          padding={{ left: 10, right: 10 }}
          height={30}
        />
        
        {/* Y Axis */}
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#666', fontSize: 12, fontWeight: 500 }}
          tickFormatter={(value) => `${value}k`}
          width={35}
          domain={[0, 'dataMax + 1']}
        />
        
        {/* Custom Tooltip */}
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                  <p className="font-bold text-[#333]">{`شهر ${label}`}</p>
                  <p className="text-[#009877] font-bold">
                    {`${payload[0].value} ألف زيارة`}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        
        {/* Main Line */}
        <Line
          type="monotone"
          dataKey="visits"
          stroke="#009877"
          strokeWidth={3}
          dot={{
            r: 6,
            stroke: '#009877',
            strokeWidth: 2,
            fill: 'white',
            strokeOpacity: 0.8
          }}
          activeDot={{
            r: 8,
            stroke: '#009877',
            strokeWidth: 2,
            fill: '#fff',
            strokeOpacity: 1
          }}
        />
        
        {/* Reference Line for Average */}
        <ReferenceLine 
          y={visitsData.reduce((a, b) => a + b.visits, 0) / visitsData.length} 
          stroke="#FF6B6B" 
          strokeDasharray="5 5"
          strokeWidth={1.5}
          label={{
            position: 'right',
            value: 'المتوسط',
            fill: '#FF6B6B',
            fontSize: 12
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
  
  {/* Summary Section */}
  <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#eee]">
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <span className="w-3 h-3 rounded-full bg-[#009877]"></span>
        <span className="text-sm text-[#555]">الزيارات</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="w-3 h-3 rounded-full bg-[#FF6B6B]"></span>
        <span className="text-sm text-[#555]">المتوسط</span>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      <span className="text-sm text-[#555]">الإجمالي:</span>
      <span className="font-bold text-[#333]">
        {visitsData.reduce((a, b) => a + b.visits, 0)} ألف زيارة
      </span>
    </div>
  </div>
</div>

      {/* Pie Chart */}
<div className="bg-[#f8f8f8] rounded-[40px] p-6 relative">
  <h2 className="text-right font-bold mb-6">الطلبات</h2>

  <div className="flex flex-col items-center relative" style={{ height: '300px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={ordersData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          paddingAngle={3}
          cornerRadius={10}
          labelLine={false}
         label={({ percent }) => percent !== undefined ? `${(percent * 100).toFixed(0)}%` : ""}
        >
          {ordersData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>

    {/* دائرة سوداء في المنتصف - تم تعديل الموضع */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full shadow-2xl bg-white text-black flex flex-col items-center justify-center text-center">
      <p className="text-lg font-bold">الإجمالي</p>
      <p className="text-2xl font-extrabold">11.230</p>
    </div>
  </div>

  {/* Legend يدوي */}
  <div className="flex justify-center gap-6 mt-6 flex-wrap text-sm font-medium">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#009877]"></span> طلب جديد
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#FFD700]"></span> المفاوضات
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#4CBAFF]"></span> تمت البيعة
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#F82F77]"></span> الغية البيعة
    </div>
  </div>
</div>
      </section>
    </main>
  );
}
