import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Header siteTitle="Default Starter" />)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('should display no title when none is passed', () => {
        const tree = renderer.create(<Header />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
