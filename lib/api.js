export async function apiRequest(endpoint, options = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(endpoint, config);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Network error' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

export const api = {
  // Company
  getCompany: () => apiRequest('/api/company'),
  updateCompany: (data) => apiRequest('/api/company', { method: 'PUT', body: JSON.stringify(data) }),

  // Hero
  getHero: () => apiRequest('/api/hero'),
  updateHero: (data) => apiRequest('/api/hero', { method: 'PUT', body: JSON.stringify(data) }),

  // House Types
  getHouseTypes: () => apiRequest('/api/house-types'),
  createHouseType: (data) => apiRequest('/api/house-types', { method: 'POST', body: JSON.stringify(data) }),
  updateHouseType: (data) => apiRequest('/api/house-types', { method: 'PUT', body: JSON.stringify(data) }),
  deleteHouseType: (id) => apiRequest(`/api/house-types?id=${id}`, { method: 'DELETE' }),

  // Housing Projects
  getHousingProjects: () => apiRequest('/api/housing-projects'),
  createHousingProject: (data) => apiRequest('/api/housing-projects', { method: 'POST', body: JSON.stringify(data) }),
  updateHousingProject: (data) => apiRequest('/api/housing-projects', { method: 'PUT', body: JSON.stringify(data) }),
  deleteHousingProject: (id) => apiRequest(`/api/housing-projects?id=${id}`, { method: 'DELETE' }),

  // Contact
  getContact: () => apiRequest('/api/contact'),
  updateContact: (data) => apiRequest('/api/contact', { method: 'PUT', body: JSON.stringify(data) }),
};