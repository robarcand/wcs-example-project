import { createSimulation } from '@wixc3/wcs-core';
import { AppProductItem } from '../../../src/components/app-product-item/app-product-item';
import { CommonSimulationsSetup } from '../../setup/common-simulations-setup';

export default createSimulation({
    componentType: AppProductItem,
    props: {
        currentPrice: '$59.99',
        originalPrice: '$84.95',
        productTitle: 'Product Title',
        isAddedToCart: false

    },
    setup: [...CommonSimulationsSetup],
    environmentProps: {
        windowHeight: 687,
        canvasWidth: 388,
        windowWidth: 531,
        canvasHeight: 455
    },
    name: 'Product Card',
});
