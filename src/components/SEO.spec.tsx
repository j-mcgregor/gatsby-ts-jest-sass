import React from 'react'
import renderer from 'react-test-renderer'
import SEO from './SEO'

describe('SEO', () => {
    it('should render with default props', () => {
        const component = renderer.create(<SEO title="Default title" />).root

        expect(component.props).toEqual({
            title: 'Default title',
        })
    })

    it('should render with custome props if passed', () => {
        const props = {
            description: 'test description',
            lang: 'EN',
            meta: [{ name: 'meta name', content: 'meta content' }],
        }
        const component = renderer.create(
            <SEO {...props} title="Custom title" />
        ).root

        expect(component.props).toEqual({
            description: 'test description',
            lang: 'EN',
            meta: [{ name: 'meta name', content: 'meta content' }],
            title: 'Custom title',
        })
    })
})
