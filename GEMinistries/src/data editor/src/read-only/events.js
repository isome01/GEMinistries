export const addEvent = [
  {
    key: 'title',
    field: {
      label: 'Name of the event:',
      inputType: 'text'
    }
  }, {
    key: 'description',
    field: {
      label: 'Description of the event:',
      inputType: 'text',
      textArea: true
    }
  }, {
    key: 'startDate',
    field: {
      label: 'Date of the event:',
      inputType: 'date'
    }
  }, {
    key: 'startTime',
    field: {
      label: 'Time of the event (e.g. 05:00 PM): ',
      inputType: 'time'
    }
  }, {
    key: 'endDate',
    field: {
      label: '... and when does it end?:',
      inputType: 'date'
    }
  }, {
    key: 'endTime',
    field: {
      label: 'End Time: ',
      inputType: 'time'
    }
  }
]

export const updateEvent = [
  ...addEvent, {
    key: 'attachment',
    field: {
      label: 'Attachments',
      inputType: 'file'
    }
  }
]
