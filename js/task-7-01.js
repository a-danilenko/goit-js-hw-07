const categoriesEl = document.querySelectorAll('.item');

const test = [...categoriesEl];

const elementOutput = test.map(item => {
    const titleEl = item.querySelector('h2');

    const itemEl = item.querySelectorAll('li');

  return console.log(`
  Категория: ${titleEl.textContent}
  Количество элементов : ${itemEl.length}
  `)
  });
