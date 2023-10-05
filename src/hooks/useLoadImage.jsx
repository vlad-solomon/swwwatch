export default async function useLoadImage(src) {
	return new Promise((resolve, reject) => {
		const img = document.createElement("img");
		(img.src = src), (img.onload = () => resolve({ height: img.height, width: img.width }));
		img.onerror = reject;
	});
}
