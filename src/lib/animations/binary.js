export const binary = (color) => {
    const matrix = document.querySelector('.matrix');
    const cells = 200;
    const rows = Math.floor(Math.sqrt(cells));
    const cols = Math.ceil(cells / rows);
    const matrixWidth = matrix.clientWidth;
    const matrixHeight = matrix.clientHeight;
    const cellWidth = matrixWidth / cols;
    const cellHeight = matrixHeight / rows;

    for (let i = 0; i < 200; i++) {
        const cell = document.createElement('div');
        cell.style.display = 'flex';
        cell.style.justifyContent = 'center'
        cell.style.alignItems = 'center'
        cell.style.color = color;
        cell.style.opacity = '0'
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.animation = `cells 1s ${Math.random() * 2000}ms forwards, fadeOut 1s 2s forwards`
        Math.random() < 0.5 ? cell.innerText = Math.round(Math.random()) : null;
        
        matrix.appendChild(cell);
    }
}