import seasonRecords from './SeasonRecordsStats.json';

const findRecord = (groupId, recordId) => seasonRecords.groups
  .find((group) => group.id === groupId)
  .records.find((record) => record.id === recordId);

test('uses the workbook season leaders rather than database results', () => {
  expect(findRecord('passing', 'passing-yards')).toMatchObject({
    name: 'Byron Leftwich',
    team: 'LV08',
    year: 2008,
    stat: 6181,
  });
  expect(findRecord('rushing', 'rushing-yards').stat).toBe(2152);
  expect(findRecord('receiving', 'receiving-yards').stat).toBe(1886);
});

test('documents meaningful workload thresholds for efficiency records', () => {
  expect(seasonRecords.groups.find((group) => group.id === 'passing').qualifier).toContain('200 passing attempts');
  expect(seasonRecords.groups.find((group) => group.id === 'rushing').qualifier).toContain('100 rushing attempts');
  expect(seasonRecords.groups.find((group) => group.id === 'receiving').qualifier).toContain('50 receptions');
});
