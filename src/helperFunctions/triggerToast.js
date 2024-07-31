export default function triggerToast(setter, text) {
  setter({ active: true, text: text });
  const resetToast = setTimeout(() => {
    setter({ active: false, text: "" });
    return clearTimeout(resetToast);
  }, 6000);
}