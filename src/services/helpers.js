export const statusList = [
    { color: '#999999', value: 0,  isSelect: true,  isRadio: true,  label: 'Новые',          radioName: 'Обработка'      },
    { color: '#0f66c6', value: 1,  isSelect: true,  isRadio: true,  label: 'Подтвержденные', radioName: 'Подтвержденный' },
    { color: '#9b460c', value: 2,  isSelect: true,  isRadio: false, label: 'Перезвонить',    radioName: 'Перезвонить'    },
    { color: '#EB3C00', value: 3,  isSelect: true,  isRadio: true,  label: 'Отказ',          radioName: 'Отказ'          },
    { color: '#009688', value: 4,  isSelect: true,  isRadio: false, label: 'В работе',       radioName: 'В работе'       },
    { color: '#8f5ceb', value: 5,  isSelect: true,  isRadio: true,  label: 'Дубли',          radioName: 'Дубль'          },
    { color: '#ece92b', value: 6,  isSelect: true,  isRadio: false, label: 'Недозвон',       radioName: 'Недозвон'       },
    { color: '#cca11b', value: 7,  isSelect: true,  isRadio: true,  label: 'Отправленные',   radioName: 'Отправленный'   },
    { color: '#00A300', value: 8,  isSelect: true,  isRadio: true,  label: 'Полученные',     radioName: 'Полученный'     },
    { color: '#bd140f', value: 9,  isSelect: true,  isRadio: true,  label: 'Возврат',        radioName: 'Возврат'        },
    { color: '#000000', value: 12, isSelect: false, isRadio: true,  label: 'Архив',          radioName: 'Архив'          }
];


const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

export const colorStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const lighter = (color, opacity) => {
            color = color.replace('#', '').match(/.{1,2}/g).map(el => parseInt(el, 16)).join();
            return `rgba(${color},${opacity})`
        };
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected ? data.color : isFocused ? lighter(data.color, 0.15) : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? data.color > 2 ? 'black' : 'white'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    multiValue: (styles, { data }) => {
        return {
            ...styles,
            backgroundColor: data.color,
            color: '#fff'
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: '#fff',
    }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export const pageCount = [
    {value: 5, label: 5},
    {value: 10, label: 10},
    {value: 15, label: 15},
    {value: 20, label: 20},
    {value: 50, label: 50},
    {value: 100, label: 100}
];

/*
    // в select'e
        Новые
        Подтвержденные
        Перезвонить
        Отказ
        В работе
        Дубли
        Недозвон
        Отправленные
        Полученные
        Возврат
/////////////////////////
    Обработка
    Подтвержденный
    Отправленный
    Полученный
    Возврат
    Отказ
    Дубль
    Архив

*/