import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'birth',
        children: [
            {
                path: '',
                loadComponent: () => import('./services/Birth-register-component/birth-register-grid/birth-register-grid.component')
                    .then(m => m.BirthRegisterGridComponent)
            },
            {
                path: 'create',
                loadComponent: () => import('./services/Birth-register-component/birth-register-create/birth-register-create.component')
                    .then(m => m.BirthRegisterCreateComponent)
            },
            {
                path: 'create/:id',
                loadComponent: () => import('./services/Birth-register-component/birth-register-create/birth-register-create.component')
                    .then(m => m.BirthRegisterCreateComponent)
            },
            {
                path: 'view/:id',
                loadComponent: () => import('./services/Birth-register-component/birth-register-view/birth-register-view.component')
                    .then(m => m.BirthRegisterViewComponent)
            }
        ]
    },
    {
        path: 'death',
        children: [
            {
                path: '',
                loadComponent: () => import('./services/Death-register-component/death-register-grid/death-register-grid.component')
                    .then(m => m.DeathRegisterGridComponent)
            },
            {
                path: 'create',
                loadComponent: () => import('./services/Death-register-component/death-register-create/death-register-create.component')
                    .then(m => m.DeathRegisterCreateComponent)
            },
            {
                path: 'create/:id',
                loadComponent: () => import('./services/Death-register-component/death-register-create/death-register-create.component')
                    .then(m => m.DeathRegisterCreateComponent)
            },
            {
                path: 'view/:id',
                loadComponent: () => import('./services/Death-register-component/death-register-view/death-register-view.component')
                    .then(m => m.DeathRegisterViewComponent)
            }
        ]
    },
    {
        path: 'tax',
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./services/Tax-manger-component/tax-manager-grid/tax-manager-grid.component')
                        .then(m => m.TaxManagerGridComponent)
            },
            {
                path: 'tax-create',
                loadComponent: () =>
                    import('./services/Tax-manger-component/tax-manager-create/tax-manager-create.component')
                        .then(m => m.TaxManagerCreateComponent)
            },
            {
                path: 'tax-create/:sno',
                loadComponent: () =>
                    import('./services/Tax-manger-component/tax-manager-create/tax-manager-create.component')
                        .then(m => m.TaxManagerCreateComponent)
            },
            {
                path: 'tax-view/:sno',
                loadComponent: () =>
                    import('./services/Tax-manger-component/tax-manager-view/tax-manager-view.component')
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