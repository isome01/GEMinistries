export const addEvent = [
  {
    key: 'title',
    field: {
      label: 'Name of the event:',
      inputType: 'text'
    }
  }, {
    key: 'type',
    field: {
      label: 'Type:',
      inputType: 'checkbox'
    }
  }, {
    key: 'description',
    field: {
      label: 'Description of the event:',
      inputType: 'text',
      textArea: true
    }
  }, {
    key: 'date',
    field: {
      label: 'Date of the event:',
      inputType: 'date'
    }
  }, {
    key: 'time',
    field: {
      label: 'Time of the event (e.g. 05:00 PM)',
      inputType: 'time'
    }
  }
]
