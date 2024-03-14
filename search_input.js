document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input__field');
  const searchButton = document.querySelector('.search-button');
  const clearButton = document.querySelector('.clear-button');
  const companyInfoContainer = document.querySelector('.company-info-container');
  
  clearButton.addEventListener('click', function() {
    searchInput.value = ''; // Очищаем поле ввода
    clearButton.style.display = 'none'; // Скрываем крестик
    companyInfoContainer.style.display = 'none'; // Скрываем информацию о компании
  });

  // Скрываем блок с информацией о компании при загрузке страницы
  companyInfoContainer.style.display = 'none';

  // Скрываем кнопку поиска при загрузке страницы
  hideSearchButton();

  // Показываем кнопку поиска при фокусировке на поле ввода
  searchInput.addEventListener('focus', showSearchButton);

  // Скрываем кнопку поиска при потере фокуса на поле ввода, если текстовое поле пустое
  searchInput.addEventListener('blur', function() {
    if (searchInput.value.trim() === '') {
      hideSearchButton();
    }
  });

  // Показываем или скрываем кнопку поиска при изменении содержимого поля ввода
  searchInput.addEventListener('input', function() {
    if (searchInput.value.trim() === '') {
      hideSearchButton();
    } else {
      showSearchButton();
    }
  });

  // Функция для скрытия кнопки поиска
  function hideSearchButton() {
    searchButton.style.display = 'none';
  }

  // Функция для показа кнопки поиска
  function showSearchButton() {
    searchButton.style.display = 'block';
  }

  // Показываем или скрываем кнопку с крестиком при изменении содержимого поля ввода
  searchInput.addEventListener('input', function() {
      if (searchInput.value.trim() !== '') {
          clearButton.style.display = 'inline-block';
      } else {
          clearButton.style.display = 'none';
      }
  });

  // Очищаем поле ввода и скрываем кнопку с крестиком при клике на него
  clearButton.addEventListener('click', function() {
      searchInput.value = '';
      clearButton.style.display = 'none';
      companyInfoContainer.style.display = 'none'; // Добавлено для скрытия информации о компании
  });

  // Обработчик события для кнопки "Найти"
  searchButton.addEventListener('click', function() {
    searchCompany();
  });

  // Обработчик события для нажатия клавиши Enter в поле ввода
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      searchCompany();
    }
  });

  // Функция для поиска компании
  function searchCompany() {
    // Проверяем, существует ли такая компания
    const companyName = searchInput.value.trim().toLowerCase();
    if (companyName === 'сбер') { // Если название компании - "Сбер"
      // Если компания существует, отображаем информацию о ней
      displayCompanyInfo();
    } else {
      // Если компания не найдена, выводим сообщение об ошибке
      alert('Компания не найдена.');
    }
  }

  // Объект с информацией о компании
  const companyInfo = {
    ticker:"Сбер",
    sector: "Финансы",
    industry: "Банковское дело",
    headquarters: "Нью-Йорк, США",
    employees: 5000,
    foundingDate: "01.01.2000",
    isin: "US1234567890"
  };

  // Функция для отображения информации о компании
  function displayCompanyInfo() {
    document.querySelector(".company-sector").textContent = companyInfo.sector;
    document.querySelector(".company-industry").textContent = companyInfo.industry;
    document.querySelector(".company-headquarters").textContent = companyInfo.headquarters;
    document.querySelector(".company-employees").textContent = companyInfo.employees;
    document.querySelector(".company-founding-date").textContent = companyInfo.foundingDate;
    document.querySelector(".company-isin").textContent = companyInfo.isin;
    

    // Показываем блок с информацией о компании
    companyInfoContainer.style.display = 'block';
  }
});
