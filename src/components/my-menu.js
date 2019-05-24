import React from 'react'
import { connect } from 'react-redux'
import { MenuItemLink, getResources, Responsive, translate } from 'react-admin'
import { withRouter } from 'react-router-dom'
import DefaultIcon from '@material-ui/icons/ViewList'
import inflection from 'inflection'

const translatedResourceName = (resource, translate) =>
  translate(`resources.${resource.name}.name`, {
    smart_count: 2,
    _:
            resource.options && resource.options.label
              ? translate(resource.options.label, {
                smart_count: 2,
                _: resource.options.label
              })
              : inflection.humanize(inflection.pluralize(resource.name))
  })

const MyMenu = ({ translate, resources, onMenuClick, logout }) =>
  (<div>
    {
      resources
        .filter(r => {
          let inMenu = r.hasList
          if (inMenu && r.options && r.options.hideFromSideMenu) {
            inMenu = false
          }
          return inMenu
        })
        .map(resource => (
          <MenuItemLink
            key={resource.name}
            to={`/${resource.name}`}
            primaryText={translatedResourceName(resource, translate)}
            onClick={onMenuClick}
            leftIcon={
              resource.icon ? <resource.icon /> : <DefaultIcon />
            }
          />
        ))}
    <Responsive
      small={logout}
      medium={null} // Pass null to render nothing on larger devices
    />
  </div>)

const mapStateToProps = state => ({
  resources: getResources(state)
})

export default translate(withRouter(connect(mapStateToProps)(MyMenu)))
