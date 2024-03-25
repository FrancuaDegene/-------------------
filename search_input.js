document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input__field');
  const searchButton = document.querySelector('.search-button');
  const clearButton = document.querySelector('.clear-button');
  const containerInfo = document.querySelector('.container-info');
  const showMoreButton = document.querySelector('.show-more-button');
  const hiddenDescription = document.querySelector('.hidden-description');
  const hideMoreButton = document.querySelector('.hide-more-button');

  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
    containerInfo.style.display = 'none';
  });

  containerInfo.style.display = 'none';

  hideSearchButton();

  searchInput.addEventListener('focus', showSearchButton);

  searchInput.addEventListener('blur', function() {
    if (searchInput.value.trim() === '') {
      hideSearchButton();
    }
  });

  searchInput.addEventListener('input', function() {
    if (searchInput.value.trim() === '') {
      hideSearchButton();
    } else {
      showSearchButton();
    }
  });

  function hideSearchButton() {
    searchButton.style.display = 'none';
  }

  function showSearchButton() {
    searchButton.style.display = 'block';
  }

  searchInput.addEventListener('input', function() {
    if (searchInput.value.trim() !== '') {
      clearButton.style.display = 'inline-block';
    } else {
      clearButton.style.display = 'none';
    }
  });

  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
    containerInfo.style.display = 'none';
  });

  searchButton.addEventListener('click', function() {
    searchCompany();
  });

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      searchCompany();
    }
  });

  function searchCompany() {
    const companyName = searchInput.value.trim().toLowerCase();
    if (companyName === 'сбер') {
      displayCompanyInfo();
    } else {
      alert('Компания не найдена.');
    }
  }

  const companyInfo = {
    ticker: "Сбер",
    sector: "Финансы",
    industry: "Банковское дело",
    headquarters: "Нью-Йорк, США",
    employees: 5000,
    foundingDate: "01.01.2000",
    isin: "US1234567890"
  };

  function displayCompanyInfo() {
    document.querySelector(".company-sector").textContent = companyInfo.sector;
    document.querySelector(".company-industry").textContent = companyInfo.industry;
    document.querySelector(".company-headquarters").textContent = companyInfo.headquarters;
    document.querySelector(".company-employees").textContent = companyInfo.employees;
    document.querySelector(".company-founding-date").textContent = companyInfo.foundingDate;
    document.querySelector(".company-isin").textContent = companyInfo.isin;

    containerInfo.style.display = 'block';
  }

  showMoreButton.addEventListener('click', function() {
    hiddenDescription.classList.add('show');
    showMoreButton.style.display = 'none';
    hideMoreButton.style.display = 'inline-block';
  });

  hideMoreButton.addEventListener('click', function() {
    hiddenDescription.classList.remove('show');
    showMoreButton.style.display = 'inline-block';
    hideMoreButton.style.display = 'none';
  });
});
