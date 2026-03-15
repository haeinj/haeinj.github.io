async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Failed to load ${file}: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(error);
        document.getElementById(id).innerHTML = `<p style="color:red; padding:20px;">${file} 로드 실패</p>`;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("header", "components/header.html");
    await loadComponent("hero", "components/hero.html");
    await loadComponent("systems", "components/systems.html");
    await loadComponent("axes", "components/axes.html");
    await loadComponent("pipeline", "components/pipeline.html");
    await loadComponent("footer", "components/footer.html");
});
