export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5a7e466b52eb0fe2223274',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-576yupdp',
                  apiId: '6d8c3ba3-5a52-4103-a3b5-510938b3e690'
                },
                {
                  buildHookId: '5f5a7e46c7cee50b8c972dbd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-4kut14d1',
                  apiId: '9dd1243f-954f-4d03-b851-f39b2b297e6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manuelsavino/sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-web-4kut14d1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
