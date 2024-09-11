function toggleLike(button) {
    console.log("Функция toggleLike вызвана!");  // Лог для отладки
    const likeImage = button.querySelector('img');  // Находим картинку внутри кнопки

    // Проверяем текущее изображение и меняем на активный или обычный лайк
    if (likeImage.src.includes('images/icons/like.svg')) {
        likeImage.src = 'images/icons/activelike.svg';
    } else {
        likeImage.src = 'images/icons/like.svg';
    }
}