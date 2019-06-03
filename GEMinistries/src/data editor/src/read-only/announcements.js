export const addAnnouncements = [
  {
    key: 'header',
    field: {
      inputType: 'text',
      label: 'Title:',
      textArea: false
    }
  }, {
    key: 'summary',
    field: {
      inputType: 'text',
      label: 'Summary:',
      textArea: true
    }
  },
    {
      key: 'attachment',
      field: {
        inputType: 'file',
        label: 'File attachments: ',
      }
  }
]

export const updateAnnouncements = [
  ...addAnnouncements,
]
