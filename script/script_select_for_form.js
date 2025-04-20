// кастомные выпадающие списки для стр Форма
const element1 = document.querySelector("#select1");
const choices1 = new Choices(element1, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});

const element2 = document.querySelector("#select2");
const choices2 = new Choices(element2, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});

// варианты в select, зависящие от ответа на предыдущий select
// стандартные готовые решения не работают, тк кастомизированный select в коде уже не select
function getSelectQuestions() {
  let selectedOption = document.querySelector(
    ".form__group_select1 .choices .choices__inner .choices__list.choices__list--single .choices__item.choices__item--selectable"
  );
  let selectedOptionCount = selectedOption.dataset.id;

  // массивы вопросов, подходящих под каждую тему
  let theme_1 = [
    document.querySelector(
      ".choices__group[data-value='Тема 1. Общая информация о Компании']"
    ),
    document.querySelector("#choices--select2-item-choice-2"),
    document.querySelector("#choices--select2-item-choice-3"),
    document.querySelector("#choices--select2-item-choice-4"),
    document.querySelector("#choices--select2-item-choice-5"),
  ];

  let theme_2 = [
    document.querySelector(
      ".choices__group[data-value='Тема 2. Качество предоставляемой услуги']"
    ),
    document.querySelector("#choices--select2-item-choice-6"),
    document.querySelector("#choices--select2-item-choice-7"),
    document.querySelector("#choices--select2-item-choice-8"),
    document.querySelector("#choices--select2-item-choice-9"),
    document.querySelector("#choices--select2-item-choice-10"),
  ];

  let theme_3 = [
    document.querySelector(
      ".choices__group[data-value='Тема 3. Расчёты/начисления']"
    ),
    document.querySelector("#choices--select2-item-choice-11"),
    document.querySelector("#choices--select2-item-choice-12"),
    document.querySelector("#choices--select2-item-choice-13"),
    document.querySelector("#choices--select2-item-choice-14"),
    document.querySelector("#choices--select2-item-choice-15"),
    document.querySelector("#choices--select2-item-choice-16"),
    document.querySelector("#choices--select2-item-choice-17"),
    document.querySelector("#choices--select2-item-choice-18"),
  ];

  let theme_4 = [
    document.querySelector(
      ".choices__group[data-value='Тема 4. Платежный документ']"
    ),
    document.querySelector("#choices--select2-item-choice-19"),
    document.querySelector("#choices--select2-item-choice-20"),
    document.querySelector("#choices--select2-item-choice-21"),
    document.querySelector("#choices--select2-item-choice-22"),
    document.querySelector("#choices--select2-item-choice-23"),
    document.querySelector("#choices--select2-item-choice-24"),
    document.querySelector("#choices--select2-item-choice-25"),
  ];

  let theme_5 = [
    document.querySelector(
      ".choices__group[data-value='Тема 5. Оплата']"
    ),
    document.querySelector("#choices--select2-item-choice-26"),
    document.querySelector("#choices--select2-item-choice-27"),
    document.querySelector("#choices--select2-item-choice-28"),
    document.querySelector("#choices--select2-item-choice-29"),
    document.querySelector("#choices--select2-item-choice-30"),
    document.querySelector("#choices--select2-item-choice-31"),
    document.querySelector("#choices--select2-item-choice-32"),
    document.querySelector("#choices--select2-item-choice-33"),
    document.querySelector("#choices--select2-item-choice-34"),
  ];

  let theme_6 = [
    document.querySelector(
      ".choices__group[data-value='Тема 6. Работа с должниками']"
    ),
    document.querySelector("#choices--select2-item-choice-35"),
    document.querySelector("#choices--select2-item-choice-36"),
    document.querySelector("#choices--select2-item-choice-37"),
    document.querySelector("#choices--select2-item-choice-38"),
    document.querySelector("#choices--select2-item-choice-39"),
    document.querySelector("#choices--select2-item-choice-40"),
    document.querySelector("#choices--select2-item-choice-41"),
    document.querySelector("#choices--select2-item-choice-42"),
    document.querySelector("#choices--select2-item-choice-43"),
    document.querySelector("#choices--select2-item-choice-44"),
  ];

  let theme_7 = [
    document.querySelector(
      ".choices__group[data-value='Тема 7. Актуализация профиля клиента']"
    ),
    document.querySelector("#choices--select2-item-choice-45"),
    document.querySelector("#choices--select2-item-choice-46"),
    document.querySelector("#choices--select2-item-choice-47"),
    document.querySelector("#choices--select2-item-choice-48"),
    document.querySelector("#choices--select2-item-choice-49"),
    document.querySelector("#choices--select2-item-choice-50"),
    document.querySelector("#choices--select2-item-choice-51"),
  ];

  let theme_8 = [
    document.querySelector(
      ".choices__group[data-value='Тема 8. Коммерческая услуга']"
    ),
    document.querySelector("#choices--select2-item-choice-52"),
    document.querySelector("#choices--select2-item-choice-53"),
    document.querySelector("#choices--select2-item-choice-54"),
    document.querySelector("#choices--select2-item-choice-55"),
    document.querySelector("#choices--select2-item-choice-56"),
    document.querySelector("#choices--select2-item-choice-57"),
    document.querySelector("#choices--select2-item-choice-58"),
  ];

  let theme_9 = [
    document.querySelector(
      ".choices__group[data-value='Тема 9. Техническая поддержка']"
    ),
    document.querySelector("#choices--select2-item-choice-59"),
  ];

  let theme_10 = [
    document.querySelector(
      ".choices__group[data-value='Тема 10. Качество обслуживания клиентов']"
    ),
    document.querySelector("#choices--select2-item-choice-60"),
    document.querySelector("#choices--select2-item-choice-61"),
    document.querySelector("#choices--select2-item-choice-62"),
    document.querySelector("#choices--select2-item-choice-63"),
    document.querySelector("#choices--select2-item-choice-64"),
    document.querySelector("#choices--select2-item-choice-65"),
  ];

  let theme_11 = [
    document.querySelector(
      ".choices__group[data-value='Тема 11. Лицевой счет']"
    ),
    document.querySelector("#choices--select2-item-choice-66"),
    document.querySelector("#choices--select2-item-choice-67"),
    document.querySelector("#choices--select2-item-choice-68"),
    document.querySelector("#choices--select2-item-choice-69"),
    document.querySelector("#choices--select2-item-choice-70"),
    document.querySelector("#choices--select2-item-choice-71"),
    document.querySelector("#choices--select2-item-choice-72"),
    document.querySelector("#choices--select2-item-choice-73"),
  ];

  if (selectedOptionCount != 1) {
    let selected = document.querySelector(".is-selected");
    let selectedId = selected.dataset.id;
    
    // let themeNumber = `theme_${selectedId - 1}`;

    if (selectedId == 2) {
      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 3) {
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 4) {
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 5) {
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 6) {
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 7) {
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 8) {
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 9) {
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 10) {
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 11) {
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.remove("active_question");
      }
    }

    if (selectedId == 12) {
      for (let i = 0; i < theme_11.length; i++) {
        theme_11[i].classList.add("active_question");
      }

      for (let i = 0; i < theme_1.length; i++) {
        theme_1[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_2.length; i++) {
        theme_2[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_3.length; i++) {
        theme_3[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_4.length; i++) {
        theme_4[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_5.length; i++) {
        theme_5[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_6.length; i++) {
        theme_6[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_7.length; i++) {
        theme_7[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_8.length; i++) {
        theme_8[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_9.length; i++) {
        theme_9[i].classList.remove("active_question");
      }
      for (let i = 0; i < theme_10.length; i++) {
        theme_10[i].classList.remove("active_question");
      }
    }

  }
}

// выполнение функции каждую 1 секунду
setInterval(getSelectQuestions, 1000);
