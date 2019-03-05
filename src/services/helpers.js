export const statusList = [
    { color: '#999999', value: 0,  isSelect: true,  isRadio: true,  label: 'Новые',          radioName: 'Обработка'      },
    { color: '#0f66c6', value: 1,  isSelect: true,  isRadio: true,  label: 'Подтвержденные', radioName: 'Подтвержденный' },
    { color: '#9b460c', value: 2,  isSelect: true,  isRadio: false, label: 'Перезвонить',    radioName: 'Перезвонить'    },
    { color: '#EB3C00', value: 3,  isSelect: true,  isRadio: true,  label: 'Отказ',          radioName: 'Отказ'          },
    { color: '#4fd9eb', value: 4,  isSelect: true,  isRadio: false, label: 'В работе',       radioName: 'В работе'       },
    { color: '#8f5ceb', value: 5,  isSelect: true,  isRadio: true,  label: 'Дубли',          radioName: 'Дубль'          },
    { color: '#ece92b', value: 6,  isSelect: true,  isRadio: false, label: 'Недозвон',       radioName: 'Недозвон'       },
    { color: '#cca11b', value: 7,  isSelect: true,  isRadio: true,  label: 'Отправленные',   radioName: 'Отправленный'   },
    { color: '#00A300', value: 8,  isSelect: true,  isRadio: true,  label: 'Полученные',     radioName: 'Полученный'     },
    { color: '#bd140f', value: 9,  isSelect: true,  isRadio: true,  label: 'Возврат',        radioName: 'Возврат'        },
    { color: '#000000', value: 12, isSelect: false, isRadio: true,  label: 'Архив',          radioName: 'Архив'          }
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