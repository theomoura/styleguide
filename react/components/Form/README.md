Form

```js
<div>
  <div className="mb5">
    <Form
      schema={{
        title: 'Personal data form',
        description: 'A complete but simple form example.',
        type: 'object',
        required: [
          'email',
          'firstName',
        ],
        properties: {
          firstName: {
            type: 'string',
            title: 'First name',
          },
          lastName: {
            type: 'string',
            title: 'Last name',
          },
          email: {
            type: 'string',
            title: 'Email',
          },
          isAwesome: {
            type: 'boolean',
            title: 'Is Awesome',
          },
          prizes: {
            type: 'array',
            title: 'Prizes',
            default: 'New prize', // placeholder
            items: {
              type: 'object',
              label: 'Prize',
              properties: {
                name: {
                  type: 'string',
                  title: 'Prize name',
                },
                reason: {
                  type: 'string',
                  title: 'Prize description'
                }
              },
            }
          },
        }
      }}
      formData={{
        firstName: 'Marie',
        lastName: 'curie',
        email: 'marie.sklodowska@mailinator.com',
        isAwesome: true,
        prizes: [
          {
            name: 'Physics Nobel',
            reason: 'study into the spontaneous radiation',
          },
          {
            name: 'Chemistry Nobel',
            reason: 'in recognition of her work in radioactivity',
          }
        ]
      }}
      onSubmit={(event) => alert(JSON.stringify(event.data))}
      submitBtnLabel="Submit"
      onCancel={() => alert('y u leaving, tho?')}
      cancelBtnLabel="Cancel"
    />
  </div>
</div>
```
