// Estado global de la aplicación
let currentCategory = 'general';
let activeCluster = null;
let barChartInstance = null;
let pieChartInstance = null;
let lineChartInstance = null;

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar parámetros de URL
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('category');
    const clusterParam = params.get('cluster');
    
    if (catParam && DATASETS[catParam]) {
        currentCategory = catParam;
    }
    if (clusterParam) {
        activeCluster = clusterParam;
    }
    
    // Inicializar dashboard
    initializeDashboard();
    
    // Event listeners
    setupEventListeners();
});

// Inicializar el dashboard
function initializeDashboard() {
    renderCategoryTabs();
    renderDashboard();
}

// Configurar event listeners
function setupEventListeners() {
    // Botón compartir
    document.getElementById('share-btn').addEventListener('click', handleShare);
    
    // Botón reset cluster
    document.getElementById('reset-cluster-btn').addEventListener('click', () => {
        activeCluster = null;
        updateURL();
        renderDashboard();
    });
}

// Renderizar pestañas de categorías
function renderCategoryTabs() {
    const tabsContainer = document.getElementById('category-tabs');
    tabsContainer.innerHTML = '';
    
    Object.keys(DATASETS).forEach(key => {
        const button = document.createElement('button');
        button.className = `py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
            currentCategory === key
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`;
        button.textContent = DATASETS[key].title;
        button.addEventListener('click', () => {
            currentCategory = key;
            activeCluster = null;
            updateURL();
            renderDashboard();
        });
        tabsContainer.appendChild(button);
    });
}

// Renderizar todo el dashboard
function renderDashboard() {
    const data = DATASETS[currentCategory];
    
    // Actualizar fuente de datos
    document.getElementById('data-source').textContent = data.source;
    
    // Renderizar KPI cards
    renderKPICards(data);
    
    // Renderizar gráficos
    renderBarChart(data);
    renderPieChart(data);
    renderLineChart(data);
    
    // Renderizar insights
    renderInsights(data);
    
    // Renderizar tácticas
    renderTactics(data);
    
    // Actualizar botón reset
    const resetBtn = document.getElementById('reset-cluster-btn');
    if (activeCluster) {
        resetBtn.classList.remove('hidden');
    } else {
        resetBtn.classList.add('hidden');
    }
    
    // Actualizar título del pie chart
    const pieTitle = document.getElementById('pie-chart-title');
    const pieSubtitle = document.getElementById('pie-chart-subtitle');
    if (activeCluster) {
        pieTitle.textContent = `Mix de Segmentos: ${activeCluster}`;
        pieSubtitle.textContent = 'Distribución específica para este cluster';
    } else {
        pieTitle.textContent = 'Mix de Segmentos (Global)';
        pieSubtitle.textContent = 'Peso en ventas por tipo de negocio (RSV)';
    }
    
    // Re-inicializar iconos Lucide
    lucide.createIcons();
}

// Renderizar KPI Cards
function renderKPICards(data) {
    const container = document.getElementById('kpi-cards');
    container.innerHTML = '';
    
    const cards = [
        {
            title: 'Clientes Activos',
            mainValue: data.metrics.clients.toLocaleString(),
            subtext: 'Total Base de Datos',
            breakdown: data.top3_metrics.clients_breakdown,
            breakdownTitle: `Sumatoria Top 3: ${data.top3_metrics.clients_sum.toLocaleString()}`,
            icon: 'users',
            colorName: 'blue'
        },
        {
            title: 'Ventas (Top 3)',
            mainValue: `${data.top3_metrics.rsv_share}%`,
            subtext: `Acumulado de ${data.top3_metrics.clusters_label}`,
            breakdown: data.top3_metrics.rsv_breakdown,
            breakdownTitle: 'Aporte Individual (RSV):',
            icon: 'dollar-sign',
            colorName: 'green'
        },
        {
            title: 'Volumen (Top 3)',
            mainValue: `${data.top3_metrics.vol_share}%`,
            subtext: `Acumulado de ${data.top3_metrics.clusters_label}`,
            breakdown: data.top3_metrics.vol_breakdown,
            breakdownTitle: 'Aporte Individual (EU):',
            icon: 'package',
            colorName: 'purple'
        },
        {
            title: 'Frecuencia Promedio',
            mainValue: data.metrics.avg_freq.toFixed(1),
            subtext: 'Visitas/Mes (Promedio General)',
            breakdown: data.top3_metrics.freq_breakdown,
            breakdownTitle: 'Frecuencia Top 3:',
            icon: 'trending-up',
            colorName: 'orange'
        }
    ];
    
    cards.forEach(card => {
        const cardElement = createCard(card);
        container.appendChild(cardElement);
    });
}

// Crear elemento de card
function createCard(card) {
    const colorMap = {
        blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
        green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
        orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    };
    const theme = colorMap[card.colorName] || colorMap.blue;
    
    const cardDiv = document.createElement('div');
    cardDiv.className = `bg-white rounded-xl shadow-sm border ${theme.border} p-5 flex flex-col justify-between h-full hover:shadow-md transition-shadow`;
    
    cardDiv.innerHTML = `
        <div class="flex items-start justify-between mb-2">
            <div>
                <p class="text-xs text-gray-500 uppercase font-bold tracking-wider">${card.title}</p>
                <h3 class="text-3xl font-extrabold text-gray-800 mt-1">${card.mainValue}</h3>
                <p class="text-xs text-gray-400 mt-1">${card.subtext}</p>
            </div>
            <div class="p-2 rounded-lg ${theme.bg}">
                <i data-lucide="${card.icon}" class="w-6 h-6 ${theme.text}"></i>
            </div>
        </div>
        ${card.breakdown ? `
            <div class="mt-4 pt-3 border-t border-dashed border-gray-200">
                <div class="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
                    <span>${card.breakdownTitle || 'Aporte Individual (Top 3):'}</span>
                </div>
                <div class="flex justify-between space-x-1">
                    ${card.breakdown.map(item => `
                        <div class="text-center flex-1 bg-gray-50 rounded p-1">
                            <div class="text-xs font-bold ${theme.text}">${item.id}</div>
                            <div class="text-sm font-bold text-gray-700">${item.val}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    return cardDiv;
}

// Renderizar gráfico de barras
function renderBarChart(data) {
    const ctx = document.getElementById('bar-chart').getContext('2d');
    
    if (barChartInstance) {
        barChartInstance.destroy();
    }
    
    const clusterNames = data.clusters.map(c => {
        const parts = c.name.split(' ');
        return `${parts[0]} ${parts[1] || ''}`;
    });
    
    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: clusterNames,
            datasets: [
                {
                    label: '% Ventas (RSV)',
                    data: data.clusters.map(c => c.rsv),
                    backgroundColor: '#0088FE',
                    borderRadius: 4,
                },
                {
                    label: '% Volumen (EU)',
                    data: data.clusters.map(c => c.vol),
                    backgroundColor: '#00C49F',
                    borderRadius: 4,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '% Participación',
                        font: { size: 10 },
                        color: '#9ca3af'
                    },
                    ticks: {
                        font: { size: 10 }
                    }
                },
                x: {
                    ticks: {
                        font: { size: 10 },
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const datasetIndex = elements[0].datasetIndex;
                    const index = elements[0].index;
                    const cluster = data.clusters[index];
                    if (cluster && cluster.name) {
                        activeCluster = activeCluster === cluster.name ? null : cluster.name;
                        updateURL();
                        renderDashboard();
                    }
                }
            },
            onHover: (event, elements) => {
                event.native.target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
            }
        }
    });
}

// Renderizar gráfico de pastel
function renderPieChart(data) {
    const ctx = document.getElementById('pie-chart').getContext('2d');
    
    if (pieChartInstance) {
        pieChartInstance.destroy();
    }
    
    const currentPieData = activeCluster && data.cluster_segments && data.cluster_segments[activeCluster]
        ? data.cluster_segments[activeCluster]
        : data.segments;
    
    const dataKey = activeCluster ? 'value' : 'rsv';
    
    pieChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: currentPieData.map(item => item.name),
            datasets: [{
                data: currentPieData.map(item => item[dataKey]),
                backgroundColor: COLORS.slice(0, currentPieData.length),
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 11 },
                        padding: 10
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(0);
                            return `${context.label}: ${percentage}%`;
                        }
                    }
                }
            }
        }
    });
}

// Renderizar gráfico de línea
function renderLineChart(data) {
    const ctx = document.getElementById('line-chart').getContext('2d');
    
    if (lineChartInstance) {
        lineChartInstance.destroy();
    }
    
    lineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.clusters.map(c => c.name.split(' ')[0]),
            datasets: [{
                label: 'Frecuencia',
                data: data.clusters.map(c => c.freq),
                borderColor: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                borderWidth: 3,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#f97316',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Frecuencia: ${context.parsed.y} visitas`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false,
                    beginAtZero: true
                }
            }
        }
    });
}

// Renderizar insights
function renderInsights(data) {
    const container = document.getElementById('insights-list');
    container.innerHTML = '';
    
    data.insights.forEach(insight => {
        const insightDiv = document.createElement('div');
        insightDiv.className = 'flex items-start group';
        insightDiv.innerHTML = `
            <i data-lucide="arrow-right" class="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0 group-hover:text-blue-500 transition-colors"></i>
            <p class="text-sm text-gray-600 leading-relaxed text-justify">${insight}</p>
        `;
        container.appendChild(insightDiv);
    });
}

// Renderizar tácticas
function renderTactics(data) {
    const container = document.getElementById('tactics-list');
    container.innerHTML = '';
    
    data.tactics.forEach(tactic => {
        const tacticDiv = document.createElement('div');
        tacticDiv.className = 'bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 mb-3';
        tacticDiv.innerHTML = `
            <h4 class="font-bold text-blue-800 flex items-center mb-1 text-sm">
                <i data-lucide="target" class="w-4 h-4 mr-2"></i>
                ${tactic.title}
            </h4>
            <p class="text-xs text-blue-700 leading-relaxed">${tactic.desc}</p>
        `;
        container.appendChild(tacticDiv);
    });
}

// Manejar compartir
async function handleShare() {
    const baseUrl = window.location.href.split('?')[0];
    const params = new URLSearchParams({ category: currentCategory });
    if (activeCluster) {
        params.set('cluster', activeCluster);
    }
    const shareUrl = `${baseUrl}?${params.toString()}`;
    
    if (navigator.share) {
        try {
            await navigator.share({ title: 'Dashboard', url: shareUrl });
        } catch (err) {
            copyToClipboard(shareUrl);
            showToast();
        }
    } else {
        copyToClipboard(shareUrl);
        showToast();
    }
}

// Copiar al portapapeles
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            return true;
        } catch (err) {
            return false;
        } finally {
            document.body.removeChild(textArea);
        }
    }
}

// Mostrar toast
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Actualizar URL sin recargar
function updateURL() {
    const params = new URLSearchParams({ category: currentCategory });
    if (activeCluster) {
        params.set('cluster', activeCluster);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
}

