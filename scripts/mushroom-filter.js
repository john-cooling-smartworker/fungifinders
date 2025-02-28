const cards = document.querySelectorAll('.mushroom-guide .card');

const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');
const noResultsMessage = document.querySelector(".no-matches")

const currentFilters = {
  season: "all",
  edible: "all",
};

seasonalFilter.addEventListener('change', updateFilter);
edibleFilter.addEventListener('change', updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;
  console.log(currentFilters);
  filterCards();
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach((card) => {
    const season = card.querySelector('[data-season]').dataset.season;
    const edible = card.querySelector('[data-edible]').dataset.edible;
    console.log(season, edible);

    const matchesSeason = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;

    if (
      (currentFilters.season === "all" || matchesSeason) &&
      (currentFilters.edible === "all" || matchesEdible)
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    console.log(hasVisibleCards)
    if (hasVisibleCards) {
      noResultsMessage.hidden = true;
    } else {
      noResultsMessage.hidden = false;
    }
     }

  );
}

