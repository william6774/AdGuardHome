import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import PageTitle from '../ui/PageTitle';

class DnsWhitelist extends Component {
    // TODO: implement functionality
    render() {
        return (
            <PageTitle title={this.props.t('dns_whitelist')} />
        );
    }
}

DnsWhitelist.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withNamespaces()(DnsWhitelist);
