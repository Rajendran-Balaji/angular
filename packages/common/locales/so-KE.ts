/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
  if (n === 1) return 1;
  return 5;
}

export default [
  'so-KE',
  [['h', 'd'], ['GH', 'GD'], u],
  [['GH', 'GD'], u, u],
  [
    ['A', 'I', 'T', 'A', 'Kh', 'J', 'S'], ['Axd', 'Isn', 'Tldo', 'Arbc', 'Khms', 'Jmc', 'Sbti'],
    ['Axad', 'Isniin', 'Talaado', 'Arbaco', 'Khamiis', 'Jimco', 'Sabti'],
    ['Axd', 'Isn', 'Tldo', 'Arbc', 'Khms', 'Jmc', 'Sbti']
  ],
  u,
  [
    ['J', 'F', 'M', 'A', 'M', 'J', 'L', 'O', 'S', 'O', 'N', 'D'],
    ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Lul', 'Ogs', 'Seb', 'Okt', 'Nof', 'Dis'],
    [
      'Bisha Koobaad', 'Bisha Labaad', 'Bisha Saddexaad', 'Bisha Afraad', 'Bisha Shanaad',
      'Bisha Lixaad', 'Bisha Todobaad', 'Bisha Sideedaad', 'Bisha Sagaalaad', 'Bisha Tobnaad',
      'Bisha Kow iyo Tobnaad', 'Bisha Laba iyo Tobnaad'
    ]
  ],
  [
    ['J', 'F', 'M', 'A', 'M', 'J', 'L', 'O', 'S', 'O', 'N', 'D'],
    ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Lul', 'Ogs', 'Seb', 'Okt', 'Nof', 'Dis'],
    [
      'Jannaayo', 'Febraayo', 'Maarso', 'Abriil', 'May', 'Juun', 'Luuliyo', 'Ogost', 'Sebtembar',
      'Oktoobar', 'Nofembar', 'Desembar'
    ]
  ],
  [['B', 'A'], ['CH', 'CD'], ['Ciise Hortii', 'Ciise Dabadii']],
  0,
  [6, 0],
  ['dd/MM/yy', 'dd-MMM-y', 'dd MMMM y', 'EEEE, MMMM dd, y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  ['{1} {0}', u, u, u],
  ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'MaL', ':'],
  ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
  'KES',
  'Ksh',
  'Shilingka Kenya',
  {'BBD': ['DBB', '$'], 'JPY': ['JP¥', '¥'], 'KES': ['Ksh'], 'SOS': ['S'], 'USD': ['US$', '$']},
  'ltr',
  plural
];
