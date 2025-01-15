document.addEventListener('DOMContentLoaded', function() {
// Get the current URL without the domain and protocol
const path = window.location.pathname;

// If the path is just "/", redirect to the base ICF Hamburg URL
if (path === "/" || path === "") {
    window.location.href = "https://icf.church/hamburg";
    return;
}

// Get the last part of the path and decode any URL encoding
const lastPathSegment = decodeURIComponent(path.split('/').filter(Boolean).pop() || '');

// Construct the full URL
const redirectUrl = `https://icf.church/hamburg/${lastPathSegment}`;

// Log for debugging (you can remove this in production)
console.log('Redirecting to:', redirectUrl);

// Redirect
window.location.href = redirectUrl;
});