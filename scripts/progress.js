// scripts/progress.js
// ==========================================================================
// GERENCIADOR CENTRAL DE PROGRESSO (localStorage)
// Usado por dashboard.html (app.js) e catalogo.html
// ==========================================================================

const GITQUEST_STORAGE_KEY = 'gitquest_progress';

/**
 * Lê o objeto de progresso salvo no localStorage.
 * Formato: { "1": "completo", "2": "completo", ... }
 * Chaves ausentes = módulo ainda não concluído.
 */
function getProgress() {
    try {
        const raw = localStorage.getItem(GITQUEST_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        console.warn('Não foi possível ler o progresso salvo:', e);
        return {};
    }
}

/**
 * Marca um módulo (aula) como concluído e persiste no localStorage.
 * @param {number|string} moduloId
 */
function markModuleComplete(moduloId) {
    const progress = getProgress();
    progress[String(moduloId)] = 'completo';
    try {
        localStorage.setItem(GITQUEST_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.warn('Não foi possível salvar o progresso:', e);
    }
}

/**
 * Verifica se um módulo específico já foi concluído.
 * @param {number|string} moduloId
 * @returns {boolean}
 */
function isModuleComplete(moduloId) {
    const progress = getProgress();
    return progress[String(moduloId)] === 'completo';
}

/**
 * Retorna quantos módulos foram concluídos no total.
 * @returns {number}
 */
function countCompletedModules() {
    const progress = getProgress();
    return Object.values(progress).filter(v => v === 'completo').length;
}

/**
 * Reseta todo o progresso salvo (útil para debug/testes).
 */
function resetProgress() {
    try {
        localStorage.removeItem(GITQUEST_STORAGE_KEY);
    } catch (e) {
        console.warn('Não foi possível resetar o progresso:', e);
    }
}