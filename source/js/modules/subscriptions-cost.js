const PRICES = {
  month: [
    {
      description: '12 занятий',
      price: 5000,
    },
    {
      price: 1700,
    },
    {
      price: 2700,
    }
  ],
  halfYear: [
    {
      description: '72 занятий',
      price: 30000,
    },
    {
      price: 10200,
    },
    {
      price: 16200,
    }
  ],
  year: [
    {
      description: '144 занятия',
      price: 60000,
    },
    {
      price: 20400,
    },
    {
      price: 32400,
    }
  ],
};

const durationButtons = document.querySelectorAll('[data-subscriptions-button]');
const pricesForward = document.querySelectorAll('[data-subscription-price-forw]');
const pricesBack = document.querySelectorAll('[data-subscription-price-back]');
const descriptions = document.querySelectorAll('[data-subscription-description]');

const resetActiveButton = () => {
  durationButtons.forEach((button) => {
    button.classList.remove('is-active');
  });
};

const getData = (key, index) => PRICES[key][index];

const changeSubscriptions = () => {
  durationButtons[0].classList.add('is-active');

  durationButtons.forEach((button) => {
    const durationValue = button.dataset.subscriptionsButton;

    button.addEventListener('click', (evt) => {
      evt.preventDefault();

      descriptions.forEach((description, index) => {
        const {description: descriptionText} = getData(durationValue, index);
        if (descriptionText) {
          description.textContent = descriptionText;
        }
      });

      pricesForward.forEach((price, index) => {
        price.textContent = getData(durationValue, index).price;
      });

      pricesBack.forEach((price, index) => {
        price.textContent = getData(durationValue, index).price;
      });

      resetActiveButton();

      button.classList.add('is-active');
    });
  });
};


const initSubscriptionsCard = () => {
  if (!durationButtons.length) {
    return;
  }

  changeSubscriptions();
};


export {initSubscriptionsCard};
