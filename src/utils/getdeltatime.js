export default function getDeltaTime(date) {
  const delta = Date.now() - date;
  if (delta > 172800000) return `${(delta / 86400000).toFixed()} days ago`;
  if (delta > 86400000) return '1 day ago';
  if (delta > 7200000) return `${(delta / 3600000).toFixed()} hours ago`;
  if (delta > 3600000) return '1 hour ago';
  if (delta > 120000) return `${(delta / 60000).toFixed()} minutes ago`;
  if (delta > 60000) return '1 minute ago';
  return 'Just now';
}
