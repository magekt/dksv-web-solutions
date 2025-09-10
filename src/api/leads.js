// This would be implemented in your backend
// For now, this shows the structure you'd want

export const captureLead = async (leadData) => {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: leadData.email,
      url: leadData.url,
      source: 'seo-tool',
      seo_score: leadData.results?.seo_score,
      issues_found: leadData.results?.issues_found,
      timestamp: new Date().toISOString(),
      // Add UTM parameters if available
      utm_source: window.location.search,
    }),
  });

  return response.json();
};

export const sendToEmailProvider = async (email, reportData) => {
  // Integration with ConvertKit, MailChimp, or your email provider
  const response = await fetch('/api/email-provider', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      report: reportData,
      template: 'seo-report',
      tags: ['seo-tool-user', 'lead'],
    }),
  });

  return response.json();
};
