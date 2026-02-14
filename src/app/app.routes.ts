import { Routes } from '@angular/router';
import { TaxManagerViewComponent } from './Tax-manger-component/tax-manager-view/tax-manager-view.component';
import { TaxReceiptGridComponent } from './services/Tax-receipt-component/tax-receipt-grid/tax-receipt-grid.component';
import { TaxReceiptCreateComponent } from './services/Tax-receipt-component/tax-receipt-create/tax-receipt-create.component';

export const routes: Routes = [

    
    {
        path: 'tax',
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./Tax-manger-component/tax-manager-grid/tax-manager-grid.component')
                        .then(m => m.TaxManagerGridComponent)
            },
            {
                path: 'tax-create',
                loadComponent: () =>
                    import('./Tax-manger-component/tax-manager-create/tax-manager-create.component')
                        .then(m => m.TaxManagerCreateComponent)
            },
            {
                path: 'tax-create/:sno',
                loadComponent: () =>
                    import('./Tax-manger-component/tax-manager-create/tax-manager-create.component')
                        .then(m => m.TaxManagerCreateComponent)
            },
            {
                path: 'tax-view/:sno',
                loadComponent: () =>
                    import('./Tax-manger-component/tax-manager-view/tax-manager-view.component')
                        .then(m => m.TaxManagerViewComponent)
            }
        ]
    },
    {
        path: 'tax-receipt',
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./services/Tax-receipt-component/tax-receipt-grid/tax-receipt-grid.component')
                        .then(m => m.TaxReceiptGridComponent)
            },
            {
                path: 'create',
                loadComponent: () =>
                    import('./services/Tax-receipt-component/tax-receipt-create/tax-receipt-create.component')
                        .then(m => m.TaxReceiptCreateComponent)
            },
            {
                path: 'create/:id',
                loadComponent: () =>
                    import('./services/Tax-receipt-component/tax-receipt-create/tax-receipt-create.component')
                        .then(m => m.TaxReceiptCreateComponent)
            },
            {
                path: 'view/:id',
                loadComponent: () =>
                    import('./services/Tax-receipt-component/tax-receipt-view/tax-receipt-view.component')
                        .then(m => m.TaxReceiptViewComponent)
            }
        ]
    },
];