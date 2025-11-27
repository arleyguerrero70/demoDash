// --- DATASET COMPLETO ---
const DATASETS = {
  general: {
    title: "Visión General (Sin Mayoristas)",
    source: "Archivo: clusterFillgeneralsinmayoristas (1).xlsx",
    metrics: { clients: 9397, avg_freq: 1.9 },
    top3_metrics: {
      clusters_label: "Clusters 4, 3 y 2",
      rsv_share: 83.7, 
      rsv_breakdown: [{ id: "C4", val: 36.8 }, { id: "C3", val: 31.1 }, { id: "C2", val: 15.8 }],
      vol_share: 84.1,
      vol_breakdown: [{ id: "C4", val: 37.4 }, { id: "C3", val: 31.3 }, { id: "C2", val: 15.4 }],
      clients_sum: 3939,
      clients_breakdown: [{ id: "C4", val: "3,015" }, { id: "C3", val: "800" }, { id: "C2", val: "124" }],
      freq_breakdown: [{ id: "C4", val: "2.6" }, { id: "C3", val: "4.2" }, { id: "C2", val: "4.7" }]
    },
    clusters: [
      { name: 'Cluster 1 (VIP)', value: 5, rsv: 2.7, vol: 2.5, freq: 4.06, desc: "5 Clientes" },
      { name: 'Cluster 2 (Alto)', value: 124, rsv: 15.8, vol: 15.4, freq: 4.69, desc: "124 Clientes" },
      { name: 'Cluster 3 (Medio-Alto)', value: 800, rsv: 31.1, vol: 31.3, freq: 4.20, desc: "800 Clientes" },
      { name: 'Cluster 4 (Medio)', value: 3015, rsv: 36.8, vol: 37.4, freq: 2.64, desc: "3,015 Clientes" },
      { name: 'Cluster 5 (Masivo)', value: 5453, rsv: 13.5, vol: 13.4, freq: 1.08, desc: "5,453 Clientes" },
    ],
    segments: [
      { name: 'Tradit-Small Grocery', value: 45, rsv: 20 },
      { name: 'Liquor Store', value: 15, rsv: 35 },
      { name: 'Restaurant', value: 20, rsv: 25 },
      { name: 'Bar', value: 10, rsv: 15 },
      { name: 'Modern Grocery', value: 10, rsv: 5 },
    ],
    cluster_segments: {
      'Cluster 1 (VIP)': [{ name: 'Hotel', value: 40 }, { name: 'Restaurant', value: 40 }, { name: 'Bar', value: 20 }],
      'Cluster 2 (Alto)': [{ name: 'Liquor Store', value: 65 }, { name: 'Modern Grocery', value: 20 }, { name: 'Restaurant', value: 15 }],
      'Cluster 3 (Medio-Alto)': [{ name: 'Restaurant', value: 45 }, { name: 'Bar', value: 35 }, { name: 'Liquor Store', value: 20 }],
      'Cluster 4 (Medio)': [{ name: 'Modern Grocery', value: 40 }, { name: 'Tradit-Small', value: 35 }, { name: 'Convenience', value: 25 }],
      'Cluster 5 (Masivo)': [{ name: 'Tradit-Small Grocery', value: 75 }, { name: 'Modern Grocery', value: 15 }, { name: 'Others', value: 10 }],
    },
    insights: [
      "Ley de Pareto: El Top 3 de clusters (4, 3 y 2) concentra el 84% del valor del negocio.",
      "Predominancia Cluster 5: Está dominado en un 75% por Tiendas Tradicionales Pequeñas.",
      "Cluster 2 (Alto Valor): Su mix es mayoritariamente Licorerías (65%)."
    ],
    tactics: [
      { title: "Defensa de Valor (Top 3)", desc: "Blindar los 3,939 clientes de Clusters 4, 3 y 2 con servicio preferencial." },
      { title: "Desarrollo Masivo (Cluster 5)", desc: "Elevar la frecuencia a 1.5 visitas/mes en Tradit-Small Grocery mediante combos." },
      { title: "Eficiencia Logística", desc: "Optimizar rutas para el Cluster 4 (Volumen Medio)." }
    ]
  },
  rtd: {
    title: "Categoría: RTD (Ready to Drink)",
    source: "Archivo: clusterFillgeneralsinmayoristas-RTD.xlsx",
    metrics: { clients: 8860, avg_freq: 1.7 },
    top3_metrics: {
      clusters_label: "Clusters 4, 3 y 5",
      rsv_share: 84.8, 
      rsv_breakdown: [{ id: "C4", val: 37.1 }, { id: "C3", val: 33.2 }, { id: "C5", val: 14.5 }],
      vol_share: 84.4, 
      vol_breakdown: [{ id: "C4", val: 37.0 }, { id: "C3", val: 32.7 }, { id: "C5", val: 14.7 }],
      clients_sum: 8759,
      clients_breakdown: [{ id: "C4", val: "2,785" }, { id: "C3", val: "800" }, { id: "C5", val: "5,174" }],
      freq_breakdown: [{ id: "C4", val: "2.4" }, { id: "C3", val: "3.6" }, { id: "C5", val: "1.0" }]
    },
    clusters: [
      { name: 'Cluster 1', value: 5, rsv: 3.1, vol: 3.5, freq: 3.61, desc: "5 Clientes" },
      { name: 'Cluster 2', value: 96, rsv: 12.1, vol: 12.1, freq: 3.89, desc: "96 Clientes" },
      { name: 'Cluster 3', value: 800, rsv: 33.2, vol: 32.7, freq: 3.64, desc: "800 Clientes" },
      { name: 'Cluster 4', value: 2785, rsv: 37.1, vol: 37.0, freq: 2.38, desc: "2,785 Clientes" },
      { name: 'Cluster 5', value: 5174, rsv: 14.5, vol: 14.7, freq: 0.98, desc: "5,174 Clientes" },
    ],
    segments: [
      { name: 'Convenience Store', value: 30, rsv: 40 },
      { name: 'Supermarket', value: 40, rsv: 30 },
      { name: 'Liquor Store', value: 15, rsv: 20 },
      { name: 'Others', value: 15, rsv: 10 },
    ],
    cluster_segments: {
      'Cluster 1': [{ name: 'Supermarket', value: 50 }, { name: 'Convenience', value: 50 }],
      'Cluster 2': [{ name: 'Convenience', value: 70 }, { name: 'Liquor Store', value: 30 }],
      'Cluster 3': [{ name: 'Convenience Store', value: 65 }, { name: 'Supermarket', value: 25 }, { name: 'Others', value: 10 }],
      'Cluster 4': [{ name: 'Supermarket', value: 45 }, { name: 'Convenience', value: 40 }, { name: 'Tradit', value: 15 }],
      'Cluster 5': [{ name: 'Tradit-Small', value: 60 }, { name: 'Supermarket', value: 30 }, { name: 'Others', value: 10 }],
    },
    insights: [
      "Dominio de Conveniencia: En Clusters de alto desempeño (2 y 3), Conveniencia pesa +65%.",
      "Supermercados en Volumen: Cluster 4 tiene una fuerte mezcla de Supermercados (45%).",
      "Masivo Tradicional: Cluster 5 sigue siendo mayoritariamente tiendas pequeñas."
    ],
    tactics: [
      { title: "Activación en Frío", desc: "Instalar neveras en Clusters 3 y 4 para capturar venta de impulso." },
      { title: "Promociones Cruzadas", desc: "Bundles RTD + Snacks en Supermercados para elevar ticket del Cluster 5." },
      { title: "Visibilidad", desc: "Material POP en el punto de pago para los 5,174 clientes masivos." }
    ]
  },
  tequila: {
    title: "Categoría: Tequila",
    source: "Archivo: clusterFillgeneralsinmayoristas-tequila (1).xlsx",
    metrics: { clients: 1220, avg_freq: 1.1 },
    top3_metrics: {
      clusters_label: "Clusters 2, 4 y 3",
      rsv_share: 74.9,
      rsv_breakdown: [{ id: "C2", val: 29.2 }, { id: "C4", val: 23.2 }, { id: "C3", val: 22.8 }],
      vol_share: 74.6,
      vol_breakdown: [{ id: "C2", val: 29.1 }, { id: "C4", val: 23.0 }, { id: "C3", val: 22.5 }],
      clients_sum: 210,
      clients_breakdown: [{ id: "C2", val: "20" }, { id: "C4", val: "146" }, { id: "C3", val: "44" }],
      freq_breakdown: [{ id: "C2", val: "2.2" }, { id: "C4", val: "2.1" }, { id: "C3", val: "1.8" }]
    },
    clusters: [
      { name: 'Cluster 1', value: 1, rsv: 6.3, vol: 5.7, freq: 1.56, desc: "1 Cliente" },
      { name: 'Cluster 2', value: 20, rsv: 29.2, vol: 29.1, freq: 2.19, desc: "20 Clientes" },
      { name: 'Cluster 3', value: 44, rsv: 22.8, vol: 22.5, freq: 1.76, desc: "44 Clientes" },
      { name: 'Cluster 4', value: 146, rsv: 23.2, vol: 23.0, freq: 2.10, desc: "146 Clientes" },
      { name: 'Cluster 5', value: 1009, rsv: 18.8, vol: 19.7, freq: 0.80, desc: "1,009 Clientes" },
    ],
    segments: [
      { name: 'Bar', value: 45, rsv: 55 },
      { name: 'Restaurant', value: 25, rsv: 25 },
      { name: 'Liquor Store', value: 20, rsv: 15 },
      { name: 'Others', value: 10, rsv: 5 },
    ],
    cluster_segments: {
      'Cluster 1': [{ name: 'Liquor Store', value: 100 }],
      'Cluster 2': [{ name: 'Bar', value: 41 }, { name: 'Restaurant', value: 30 }, { name: 'Liquor Store', value: 29 }],
      'Cluster 3': [{ name: 'Bar', value: 32 }, { name: 'Restaurant', value: 25 }, { name: 'Liquor Store', value: 25 }],
      'Cluster 4': [{ name: 'Liquor Store', value: 25 }, { name: 'Restaurant', value: 25 }, { name: 'Bar', value: 25 }],
      'Cluster 5': [{ name: 'Restaurant', value: 30 }, { name: 'Bar', value: 25 }, { name: 'Others', value: 20 }],
    },
    insights: [
      "Frecuencia Normalizada: Clusters 2 y 3 muestran frecuencias de ~2 visitas/mes.",
      "Mix Balanceado: El Cluster 2 es una mezcla saludable de Bares (41%), Restaurantes (30%) y Licorerías (29%).",
      "Oportunidad: Espacio para aumentar la visita semanal en cuentas clave."
    ],
    tactics: [
      { title: "Gestión de Portafolio", desc: "Asegurar mix completo en los 20 clientes del Cluster 2." },
      { title: "Desarrollo de Frecuencia", desc: "Implementar plan de visitas semanales para Clusters 2 y 4." },
      { title: "Activación PV", desc: "Material de visibilidad en Bares del Cluster 2." }
    ]
  },
  whisky: {
    title: "Categoría: Whisky",
    source: "Archivo: clusterFillgeneralsinmayoristas-whisky.xlsx",
    metrics: { clients: 6991, avg_freq: 0.8 },
    top3_metrics: {
      clusters_label: "Clusters 4, 3 y 5",
      rsv_share: 82.0,
      rsv_breakdown: [{ id: "C4", val: 34.2 }, { id: "C3", val: 28.2 }, { id: "C5", val: 19.6 }],
      vol_share: 86.1,
      vol_breakdown: [{ id: "C4", val: 37.5 }, { id: "C3", val: 27.8 }, { id: "C5", val: 20.8 }],
      clients_sum: 6927,
      clients_breakdown: [{ id: "C4", val: "1,466" }, { id: "C3", val: "398" }, { id: "C5", val: "5,063" }],
      freq_breakdown: [{ id: "C4", val: "1.3" }, { id: "C3", val: "2.4" }, { id: "C5", val: "0.5" }]
    },
    clusters: [
      { name: 'Cluster 1', value: 3, rsv: 3.4, vol: 1.4, freq: 2.87, desc: "3 Clientes" },
      { name: 'Cluster 2', value: 61, rsv: 14.5, vol: 12.5, freq: 2.41, desc: "61 Clientes" },
      { name: 'Cluster 3', value: 398, rsv: 28.2, vol: 27.8, freq: 2.44, desc: "398 Clientes" },
      { name: 'Cluster 4', value: 1466, rsv: 34.2, vol: 37.5, freq: 1.25, desc: "1,466 Clientes" },
      { name: 'Cluster 5', value: 5063, rsv: 19.6, vol: 20.8, freq: 0.50, desc: "5,063 Clientes" },
    ],
    segments: [
      { name: 'Liquor Store', value: 30, rsv: 45 },
      { name: 'Modern Grocery', value: 30, rsv: 25 },
      { name: 'Tradit-Small Grocery', value: 30, rsv: 20 },
      { name: 'On Trade', value: 10, rsv: 10 },
    ],
    cluster_segments: {
      'Cluster 1': [{ name: 'Liquor Store', value: 100 }],
      'Cluster 2': [{ name: 'Liquor Store', value: 80 }, { name: 'Modern Grocery', value: 20 }],
      'Cluster 3': [{ name: 'Liquor Store', value: 70 }, { name: 'Modern Grocery', value: 25 }, { name: 'Tradit', value: 5 }],
      'Cluster 4': [{ name: 'Modern Grocery', value: 50 }, { name: 'Liquor Store', value: 30 }, { name: 'Tradit', value: 20 }],
      'Cluster 5': [{ name: 'Tradit-Small', value: 60 }, { name: 'Modern Grocery', value: 30 }, { name: 'Others', value: 10 }],
    },
    insights: [
      "Licorerías High-End: Clusters 2 y 3 dominados por Licorerías (>70%).",
      "Canal Moderno: Cluster 4 tiene fuerte componente de Supermercados (50%).",
      "Mix Canal: Ejecución en góndola (C4) vs Asesoría experta (C2/C3)."
    ],
    tactics: [
      { title: "Premiumización", desc: "Venta de etiquetas Black/Gold en Clusters 2 y 3." },
      { title: "Estacionalidad", desc: "Packs de regalo para Cluster 4 en festividades." },
      { title: "Share of Shelf", desc: "Asegurar visibilidad en Modern Grocery." }
    ]
  }
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

