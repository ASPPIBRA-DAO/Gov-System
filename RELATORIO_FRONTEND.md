# 🕵️ RELATÓRIO DE AUDITORIA - FRONTEND (REACT/VITE)
Data: 12/20/2025, 5:56:12 PM
Diretório Raiz: /home/user/Gov-System

---

## 1. 🌳 ESTRUTURA DE ARQUIVOS (Resumida)
```text
├── public/
│   ├── assets/
│   │   ├── background/
│   │   │   ├── background-3-blur.webp
│   │   │   ├── background-3.webp
│   │   │   ├── background-4.jpg
│   │   │   ├── background-5.webp
│   │   │   ├── background-6.webp
│   │   │   ├── background-7.webp
│   │   │   ├── overlay.svg
│   │   │   ├── shape-circle-1.svg
│   │   │   ├── shape-circle-3.svg
│   │   │   └── shape-square.svg
│   │   ├── icons/
│   │   │   ├── apps/
│   │   │   │   ├── ic-app-1.webp
│   │   │   │   ├── ic-app-2.webp
│   │   │   │   ├── ic-app-3.webp
│   │   │   │   ├── ic-app-4.webp
│   │   │   │   ├── ic-app-5.webp
│   │   │   │   ├── ic-app-drive.svg
│   │   │   │   ├── ic-app-dropbox.svg
│   │   │   │   └── ic-app-onedrive.svg
│   │   │   ├── components/
│   │   │   │   ├── ic-accordion.svg
│   │   │   │   ├── ic-alert.svg
│   │   │   │   ├── ic-autocomplete.svg
│   │   │   │   ├── ic-avatar.svg
│   │   │   │   ├── ic-badge.svg
│   │   │   │   ├── ic-breadcrumbs.svg
│   │   │   │   ├── ic-buttons.svg
│   │   │   │   ├── ic-checkbox.svg
│   │   │   │   ├── ic-chip.svg
│   │   │   │   ├── ic-colors.svg
│   │   │   │   ├── ic-data-grid.svg
│   │   │   │   ├── ic-date-pickers.svg
│   │   │   │   ├── ic-dialog.svg
│   │   │   │   ├── ic-drawer.svg
│   │   │   │   ├── ic-extra-animate.svg
│   │   │   │   ├── ic-extra-carousel.svg
│   │   │   │   ├── ic-extra-chart.svg
│   │   │   │   ├── ic-extra-dnd.svg
│   │   │   │   ├── ic-extra-editor.svg
│   │   │   │   ├── ic-extra-form-validation.svg
│   │   │   │   ├── ic-extra-form-wizard.svg
│   │   │   │   ├── ic-extra-image.svg
│   │   │   │   ├── ic-extra-label.svg
│   │   │   │   ├── ic-extra-layout.svg
│   │   │   │   ├── ic-extra-lightbox.svg
│   │   │   │   ├── ic-extra-map.svg
│   │   │   │   ├── ic-extra-markdown.svg
│   │   │   │   ├── ic-extra-mega-menu.svg
│   │   │   │   ├── ic-extra-multi-language.svg
│   │   │   │   ├── ic-extra-navigation-bar.svg
│   │   │   │   ├── ic-extra-organization-chart.svg
│   │   │   │   ├── ic-extra-scroll-progress.svg
│   │   │   │   ├── ic-extra-scrollbar.svg
│   │   │   │   ├── ic-extra-snackbar.svg
│   │   │   │   ├── ic-extra-upload.svg
│   │   │   │   ├── ic-extra-utilities.svg
│   │   │   │   ├── ic-extra-walktour.svg
│   │   │   │   ├── ic-grid.svg
│   │   │   │   ├── ic-icons.svg
│   │   │   │   ├── ic-list.svg
│   │   │   │   ├── ic-menu.svg
│   │   │   │   ├── ic-pagination.svg
│   │   │   │   ├── ic-popover.svg
│   │   │   │   ├── ic-progress.svg
│   │   │   │   ├── ic-radio-button.svg
│   │   │   │   ├── ic-rating.svg
│   │   │   │   ├── ic-shadows.svg
│   │   │   │   ├── ic-slider.svg
│   │   │   │   ├── ic-stepper.svg
│   │   │   │   ├── ic-switch.svg
│   │   │   │   ├── ic-table.svg
│   │   │   │   ├── ic-tabs.svg
│   │   │   │   ├── ic-text-field.svg
│   │   │   │   ├── ic-timeline.svg
│   │   │   │   ├── ic-tooltip.svg
│   │   │   │   ├── ic-transfer-list.svg
│   │   │   │   ├── ic-tree-view.svg
│   │   │   │   └── ic-typography.svg
│   │   │   ├── courses/
│   │   │   │   ├── ic-courses-certificates.svg
│   │   │   │   ├── ic-courses-completed.svg
│   │   │   │   └── ic-courses-progress.svg
│   │   │   ├── empty/
│   │   │   │   ├── ic-cart.svg
│   │   │   │   ├── ic-chat-active.svg
│   │   │   │   ├── ic-chat-empty.svg
│   │   │   │   ├── ic-content.svg
│   │   │   │   ├── ic-email-disabled.svg
│   │   │   │   ├── ic-email-selected.svg
│   │   │   │   ├── ic-folder-empty.svg
│   │   │   │   └── ic-mail.svg
│   │   │   ├── faqs/
│   │   │   │   ├── ic-account.svg
│   │   │   │   ├── ic-assurances.svg
│   │   │   │   ├── ic-delivery.svg
│   │   │   │   ├── ic-package.svg
│   │   │   │   ├── ic-payment.svg
│   │   │   │   └── ic-refund.svg
│   │   │   ├── files/
│   │   │   │   ├── ic-ai.svg
│   │   │   │   ├── ic-audio.svg
│   │   │   │   ├── ic-document.svg
│   │   │   │   ├── ic-excel.svg
│   │   │   │   ├── ic-file.svg
│   │   │   │   ├── ic-folder.svg
│   │   │   │   ├── ic-img.svg
│   │   │   │   ├── ic-js.svg
│   │   │   │   ├── ic-pdf.svg
│   │   │   │   ├── ic-power-point.svg
│   │   │   │   ├── ic-pts.svg
│   │   │   │   ├── ic-txt.svg
│   │   │   │   ├── ic-video.svg
│   │   │   │   ├── ic-word.svg
│   │   │   │   └── ic-zip.svg
│   │   │   ├── glass/
│   │   │   │   ├── ic-glass-bag.svg
│   │   │   │   ├── ic-glass-buy.svg
│   │   │   │   ├── ic-glass-message.svg
│   │   │   │   └── ic-glass-users.svg
│   │   │   ├── navbar/
│   │   │   │   ├── ic-analytics.svg
│   │   │   │   ├── ic-banking.svg
│   │   │   │   ├── ic-blank.svg
│   │   │   │   ├── ic-blog.svg
│   │   │   │   ├── ic-booking.svg
│   │   │   │   ├── ic-calendar.svg
│   │   │   │   ├── ic-chat.svg
│   │   │   │   ├── ic-course.svg
│   │   │   │   ├── ic-dashboard.svg
│   │   │   │   ├── ic-disabled.svg
│   │   │   │   ├── ic-ecommerce.svg
│   │   │   │   ├── ic-external.svg
│   │   │   │   ├── ic-file.svg
│   │   │   │   ├── ic-folder.svg
│   │   │   │   ├── ic-invoice.svg
│   │   │   │   ├── ic-job.svg
│   │   │   │   ├── ic-kanban.svg
│   │   │   │   ├── ic-label.svg
│   │   │   │   ├── ic-lock.svg
│   │   │   │   ├── ic-mail.svg
│   │   │   │   ├── ic-menu-item.svg
│   │   │   │   ├── ic-order.svg
│   │   │   │   ├── ic-params.svg
│   │   │   │   ├── ic-product.svg
│   │   │   │   ├── ic-subpaths.svg
│   │   │   │   ├── ic-tour.svg
│   │   │   │   └── ic-user.svg
│   │   │   ├── platforms/
│   │   │   │   ├── ic-amplify.svg
│   │   │   │   ├── ic-auth0.svg
│   │   │   │   ├── ic-figma.svg
│   │   │   │   ├── ic-firebase.svg
│   │   │   │   ├── ic-js.svg
│   │   │   │   ├── ic-jwt.svg
│   │   │   │   ├── ic-mui.svg
│   │   │   │   ├── ic-nextjs.svg
│   │   │   │   ├── ic-react.svg
│   │   │   │   ├── ic-supabase.svg
│   │   │   │   ├── ic-ts.svg
│   │   │   │   └── ic-vite.svg
│   │   │   └── workspaces/
│   │   │       ├── logo-1.webp
│   │   │       ├── logo-2.webp
│   │   │       └── logo-3.webp
│   │   ├── illustrations/
│   │   │   ├── characters/
│   │   │   │   ├── character-fly.webp
│   │   │   │   ├── character-happy-jump.webp
│   │   │   │   ├── character-maintenance.webp
│   │   │   │   ├── character-notification.webp
│   │   │   │   ├── character-present.webp
│   │   │   │   ├── character-question.webp
│   │   │   │   ├── character-reject.webp
│   │   │   │   └── character-study.webp
│   │   │   ├── illustration-dashboard.webp
│   │   │   ├── illustration-integration.webp
│   │   │   ├── illustration-receipt.webp
│   │   │   ├── illustration-rocket-large.webp
│   │   │   ├── illustration-rocket-small.webp
│   │   │   └── illustration-upgrade.webp
│   │   └── images/
│   │       ├── about/
│   │       │   ├── hero.webp
│   │       │   ├── testimonials.webp
│   │       │   ├── vision.webp
│   │       │   ├── what-large.webp
│   │       │   └── what-small.webp
│   │       ├── contact/
│   │       │   └── hero.webp
│   │       ├── faqs/
│   │       │   └── hero.webp
│   │       ├── home/
│   │       │   ├── bundle-dark-1.webp
│   │       │   ├── bundle-dark-2.webp
│   │       │   ├── bundle-light-1.webp
│   │       │   ├── bundle-light-2.webp
│   │       │   ├── for-designer.webp
│   │       │   ├── hero-blur.webp
│   │       │   ├── highlight-darkmode.webp
│   │       │   ├── highlight-presets-1.webp
│   │       │   ├── highlight-presets-2.webp
│   │       │   ├── highlight-presets-3.webp
│   │       │   ├── highlight-presets-4.webp
│   │       │   ├── highlight-presets-5.webp
│   │       │   ├── highlight-rtl.webp
│   │       │   ├── home-chart.webp
│   │       │   └── zone-landing.webp
│   │       └── mock/
│   │           ├── avatar/
│   │           │   └── ... (profundidade máxima atingida)
│   │           ├── company/
│   │           │   └── ... (profundidade máxima atingida)
│   │           ├── course/
│   │           │   └── ... (profundidade máxima atingida)
│   │           ├── cover/
│   │           │   └── ... (profundidade máxima atingida)
│   │           ├── m-product/
│   │           │   └── ... (profundidade máxima atingida)
│   │           ├── portrait/
│   │           │   └── ... (profundidade máxima atingida)
│   │           └── travel/
│   │               └── ... (profundidade máxima atingida)
│   ├── fonts/
│   │   ├── Roboto-Bold.ttf
│   │   └── Roboto-Regular.ttf
│   ├── logo/
│   │   ├── logo-full.png
│   │   ├── logo-full.svg
│   │   ├── logo-single.png
│   │   └── logo-single.svg
│   └── favicon.ico
├── scripts/
│   └── audit-architecture-v4.js
├── src/
│   ├── _mock/
│   │   ├── _blog.ts
│   │   ├── _calendar.ts
│   │   ├── _files.ts
│   │   ├── _invoice.ts
│   │   ├── _job.ts
│   │   ├── _mock.ts
│   │   ├── _order.ts
│   │   ├── _others.ts
│   │   ├── _overview.ts
│   │   ├── _product.ts
│   │   ├── _tour.ts
│   │   ├── _user.ts
│   │   ├── assets.ts
│   │   └── index.ts
│   ├── actions/
│   │   ├── blog.ts
│   │   ├── calendar.ts
│   │   ├── chat.ts
│   │   ├── kanban.ts
│   │   ├── mail.ts
│   │   └── product.ts
│   ├── assets/
│   │   ├── data/
│   │   │   ├── countries.ts
│   │   │   └── index.ts
│   │   ├── icons/
│   │   │   ├── email-inbox-icon.tsx
│   │   │   ├── index.ts
│   │   │   ├── new-password-icon.tsx
│   │   │   ├── password-icon.tsx
│   │   │   ├── plan-free-icon.tsx
│   │   │   ├── plan-premium-icon.tsx
│   │   │   ├── plan-starter-icon.tsx
│   │   │   └── sent-icon.tsx
│   │   └── illustrations/
│   │       ├── avatar-shape.tsx
│   │       ├── background-shape.tsx
│   │       ├── booking-illustration.tsx
│   │       ├── check-in-illustration.tsx
│   │       ├── check-out-illustration.tsx
│   │       ├── coming-soon-illustration.tsx
│   │       ├── forbidden-illustration.tsx
│   │       ├── index.ts
│   │       ├── maintenance-illustration.tsx
│   │       ├── motivation-illustration.tsx
│   │       ├── order-complete-illustration.tsx
│   │       ├── page-not-found-illustration.tsx
│   │       ├── seo-illustration.tsx
│   │       ├── server-error-illustration.tsx
│   │       └── upload-illustration.tsx
│   ├── auth/
│   │   ├── components/
│   │   │   ├── form-divider.tsx
│   │   │   ├── form-head.tsx
│   │   │   ├── form-resend-code.tsx
│   │   │   ├── form-return-link.tsx
│   │   │   ├── form-socials.tsx
│   │   │   └── sign-up-terms.tsx
│   │   ├── context/
│   │   │   ├── amplify/
│   │   │   │   ├── action.tsx
│   │   │   │   ├── auth-provider.tsx
│   │   │   │   └── index.ts
│   │   │   ├── auth0/
│   │   │   │   ├── auth-provider.tsx
│   │   │   │   └── index.ts
│   │   │   ├── firebase/
│   │   │   │   ├── action.ts
│   │   │   │   ├── auth-provider.tsx
│   │   │   │   └── index.ts
│   │   │   ├── jwt/
│   │   │   │   ├── action.ts
│   │   │   │   ├── auth-provider.tsx
│   │   │   │   ├── constant.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── utils.ts
│   │   │   ├── supabase/
│   │   │   │   ├── action.tsx
│   │   │   │   ├── auth-provider.tsx
│   │   │   │   └── index.ts
│   │   │   └── auth-context.tsx
│   │   ├── guard/
│   │   │   ├── auth-guard.tsx
│   │   │   ├── guest-guard.tsx
│   │   │   ├── index.ts
│   │   │   └── role-based-guard.tsx
│   │   ├── hooks/
│   │   │   ├── index.ts
│   │   │   ├── use-auth-context.ts
│   │   │   └── use-mocked-user.ts
│   │   ├── utils/
│   │   │   ├── error-message.ts
│   │   │   └── index.ts
│   │   ├── view/
│   │   │   ├── amplify/
│   │   │   │   ├── amplify-reset-password-view.tsx
│   │   │   │   ├── amplify-sign-in-view.tsx
│   │   │   │   ├── amplify-sign-up-view.tsx
│   │   │   │   ├── amplify-update-password-view.tsx
│   │   │   │   ├── amplify-verify-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── auth-demo/
│   │   │   │   ├── centered/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── split/
│   │   │   │       └── ... (profundidade máxima atingida)
│   │   │   ├── auth0/
│   │   │   │   ├── auth0-sign-in-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── firebase/
│   │   │   │   ├── firebase-reset-password-view.tsx
│   │   │   │   ├── firebase-sign-in-view.tsx
│   │   │   │   ├── firebase-sign-up-view.tsx
│   │   │   │   ├── firebase-verify-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── jwt/
│   │   │   │   ├── index.ts
│   │   │   │   ├── jwt-sign-in-view.tsx
│   │   │   │   └── jwt-sign-up-view.tsx
│   │   │   └── supabase/
│   │   │       ├── index.ts
│   │   │       ├── supabase-reset-password-view.tsx
│   │   │       ├── supabase-sign-in-view.tsx
│   │   │       ├── supabase-sign-up-view.tsx
│   │   │       ├── supabase-update-password-view.tsx
│   │   │       └── supabase-verify-view.tsx
│   │   └── types.ts
│   ├── components/
│   │   ├── animate/
│   │   │   ├── scroll-progress/
│   │   │   │   ├── index.ts
│   │   │   │   ├── scroll-progress.tsx
│   │   │   │   └── use-scroll-progress.ts
│   │   │   ├── variants/
│   │   │   │   ├── actions.ts
│   │   │   │   ├── background.ts
│   │   │   │   ├── bounce.ts
│   │   │   │   ├── container.ts
│   │   │   │   ├── fade.ts
│   │   │   │   ├── flip.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── path.ts
│   │   │   │   ├── rotate.ts
│   │   │   │   ├── scale.ts
│   │   │   │   ├── slide.ts
│   │   │   │   ├── transition.ts
│   │   │   │   └── zoom.ts
│   │   │   ├── animate-border.tsx
│   │   │   ├── animate-count-up.tsx
│   │   │   ├── animate-logo.tsx
│   │   │   ├── animate-text.tsx
│   │   │   ├── back-to-top-button.tsx
│   │   │   ├── index.ts
│   │   │   ├── motion-container.tsx
│   │   │   ├── motion-lazy.tsx
│   │   │   └── motion-viewport.tsx
│   │   ├── carousel/
│   │   │   ├── components/
│   │   │   │   ├── arrow-button.tsx
│   │   │   │   ├── carousel-arrow-buttons.tsx
│   │   │   │   ├── carousel-dot-buttons.tsx
│   │   │   │   ├── carousel-progress-bar.tsx
│   │   │   │   ├── carousel-slide.tsx
│   │   │   │   ├── carousel-thumb.tsx
│   │   │   │   ├── carousel-thumbs.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks/
│   │   │   │   ├── use-carousel-arrows.ts
│   │   │   │   ├── use-carousel-auto-scroll.ts
│   │   │   │   ├── use-carousel-autoplay.ts
│   │   │   │   ├── use-carousel-dots.ts
│   │   │   │   ├── use-carousel-parallax.ts
│   │   │   │   ├── use-carousel-progress.ts
│   │   │   │   ├── use-carousel.ts
│   │   │   │   └── use-thumbs.ts
│   │   │   ├── breakpoints.ts
│   │   │   ├── carousel.tsx
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   ├── types.ts
│   │   │   └── utils.ts
│   │   ├── chart/
│   │   │   ├── components/
│   │   │   │   ├── chart-legends.tsx
│   │   │   │   ├── chart-loading.tsx
│   │   │   │   ├── chart-select.tsx
│   │   │   │   └── index.ts
│   │   │   ├── chart.tsx
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   ├── styles.css
│   │   │   ├── types.ts
│   │   │   └── use-chart.ts
│   │   ├── color-utils/
│   │   │   ├── classes.ts
│   │   │   ├── color-picker.tsx
│   │   │   ├── color-preview.tsx
│   │   │   └── index.ts
│   │   ├── country-select/
│   │   │   ├── country-select.tsx
│   │   │   └── index.ts
│   │   ├── custom-breadcrumbs/
│   │   │   ├── back-link.tsx
│   │   │   ├── breadcrumb-link.tsx
│   │   │   ├── custom-breadcrumbs.tsx
│   │   │   ├── index.ts
│   │   │   ├── more-links.tsx
│   │   │   └── styles.tsx
│   │   ├── custom-data-grid/
│   │   │   ├── grid-actions-cell-item.tsx
│   │   │   ├── index.ts
│   │   │   ├── toolbar-core.tsx
│   │   │   └── toolbar-extend-settings.tsx
│   │   ├── custom-date-range-picker/
│   │   │   ├── custom-date-range-picker.tsx
│   │   │   ├── index.ts
│   │   │   └── use-date-range-picker.ts
│   │   ├── custom-dialog/
│   │   │   ├── confirm-dialog.tsx
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── custom-popover/
│   │   │   ├── custom-popover.tsx
│   │   │   ├── hooks.ts
│   │   │   ├── index.ts
│   │   │   ├── styles.tsx
│   │   │   ├── types.ts
│   │   │   └── utils.ts
│   │   ├── editor/
│   │   │   ├── components/
│   │   │   │   ├── bubble-toolbar.tsx
│   │   │   │   ├── code-highlight-block.css
│   │   │   │   ├── code-highlight-block.tsx
│   │   │   │   ├── heading-block.tsx
│   │   │   │   ├── image-block.tsx
│   │   │   │   ├── link-block.tsx
│   │   │   │   ├── toolbar-icons.tsx
│   │   │   │   ├── toolbar-item.tsx
│   │   │   │   ├── toolbar.tsx
│   │   │   │   └── use-toolbar-state.ts
│   │   │   ├── extension/
│   │   │   │   ├── clear-format.ts
│   │   │   │   └── text-transform.ts
│   │   │   ├── classes.ts
│   │   │   ├── editor.tsx
│   │   │   ├── index.ts
│   │   │   ├── styles.tsx
│   │   │   └── types.ts
│   │   ├── empty-content/
│   │   │   ├── empty-content.tsx
│   │   │   └── index.ts
│   │   ├── file-thumbnail/
│   │   │   ├── classes.ts
│   │   │   ├── file-thumbnail.tsx
│   │   │   ├── index.ts
│   │   │   ├── styles.tsx
│   │   │   ├── types.ts
│   │   │   ├── use-file-preview.ts
│   │   │   └── utils.ts
│   │   ├── filters-result/
│   │   │   ├── filters-block.tsx
│   │   │   ├── filters-result.tsx
│   │   │   └── index.ts
│   │   ├── flag-icon/
│   │   │   ├── classes.ts
│   │   │   ├── flag-icon.tsx
│   │   │   └── index.ts
│   │   ├── hook-form/
│   │   │   ├── fields.tsx
│   │   │   ├── form-provider.tsx
│   │   │   ├── help-text.tsx
│   │   │   ├── index.ts
│   │   │   ├── rhf-autocomplete.tsx
│   │   │   ├── rhf-checkbox.tsx
│   │   │   ├── rhf-code.tsx
│   │   │   ├── rhf-country-select.tsx
│   │   │   ├── rhf-date-picker.tsx
│   │   │   ├── rhf-editor.tsx
│   │   │   ├── rhf-number-input.tsx
│   │   │   ├── rhf-phone-input.tsx
│   │   │   ├── rhf-radio-group.tsx
│   │   │   ├── rhf-rating.tsx
│   │   │   ├── rhf-select.tsx
│   │   │   ├── rhf-slider.tsx
│   │   │   ├── rhf-switch.tsx
│   │   │   ├── rhf-text-field.tsx
│   │   │   ├── rhf-upload.tsx
│   │   │   └── schema-utils.ts
│   │   ├── iconify/
│   │   │   ├── classes.ts
│   │   │   ├── icon-sets.ts
│   │   │   ├── iconify.tsx
│   │   │   ├── index.ts
│   │   │   └── register-icons.ts
│   │   ├── image/
│   │   │   ├── classes.ts
│   │   │   ├── image.tsx
│   │   │   ├── index.ts
│   │   │   └── styles.tsx
│   │   ├── label/
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   ├── label.tsx
│   │   │   ├── styles.tsx
│   │   │   └── types.ts
│   │   ├── lightbox/
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   ├── lightbox.tsx
│   │   │   ├── styles.css
│   │   │   ├── types.ts
│   │   │   ├── use-lightbox.ts
│   │   │   └── utils.ts
│   │   ├── loading-screen/
│   │   │   ├── index.ts
│   │   │   ├── loading-screen.tsx
│   │   │   └── splash-screen.tsx
│   │   ├── logo/
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   └── logo.tsx
│   │   ├── map/
│   │   │   ├── presets/
│   │   │   │   ├── dark-matter-gl.json
│   │   │   │   ├── positron-gl.json
│   │   │   │   └── voyager-gl.json
│   │   │   ├── index.ts
│   │   │   ├── map-controls.tsx
│   │   │   ├── map-marker.tsx
│   │   │   ├── map-popup.tsx
│   │   │   ├── map-styles.ts
│   │   │   ├── map.tsx
│   │   │   ├── styles.css
│   │   │   └── use-map-marker-popup.ts
│   │   ├── markdown/
│   │   │   ├── classes.ts
│   │   │   ├── code-highlight-block.css
│   │   │   ├── html-tags.ts
│   │   │   ├── html-to-markdown.ts
│   │   │   ├── index.ts
│   │   │   ├── markdown.tsx
│   │   │   └── styles.tsx
│   │   ├── mega-menu/
│   │   │   ├── components/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-carousel.tsx
│   │   │   │   ├── nav-drawer.tsx
│   │   │   │   ├── nav-dropdown-content.tsx
│   │   │   │   ├── nav-dropdown.tsx
│   │   │   │   ├── nav-elements.tsx
│   │   │   │   ├── nav-item.tsx
│   │   │   │   └── nav-sub-list.tsx
│   │   │   ├── horizontal/
│   │   │   │   ├── index.ts
│   │   │   │   ├── mega-menu-horizontal.tsx
│   │   │   │   └── nav-list.tsx
│   │   │   ├── mobile/
│   │   │   │   ├── index.ts
│   │   │   │   ├── mega-menu-mobile.tsx
│   │   │   │   ├── nav-list-collapse.tsx
│   │   │   │   └── nav-list-drawer.tsx
│   │   │   ├── styles/
│   │   │   │   ├── classes.ts
│   │   │   │   ├── css-vars.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── nav-item-styles.tsx
│   │   │   ├── utils/
│   │   │   │   ├── create-nav-item.ts
│   │   │   │   └── index.ts
│   │   │   ├── vertical/
│   │   │   │   ├── index.ts
│   │   │   │   ├── mega-menu-vertical.tsx
│   │   │   │   └── nav-list.tsx
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── nav-basic/
│   │   │   ├── components/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-collapse.tsx
│   │   │   │   ├── nav-dropdown.tsx
│   │   │   │   └── nav-elements.tsx
│   │   │   ├── desktop/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-basic-desktop.tsx
│   │   │   │   ├── nav-item.tsx
│   │   │   │   └── nav-list.tsx
│   │   │   ├── mobile/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-basic-mobile.tsx
│   │   │   │   ├── nav-item.tsx
│   │   │   │   └── nav-list.tsx
│   │   │   ├── styles/
│   │   │   │   ├── classes.ts
│   │   │   │   ├── css-vars.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── nav-item-styles.tsx
│   │   │   ├── utils/
│   │   │   │   ├── create-nav-item.ts
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── nav-section/
│   │   │   ├── components/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-collapse.tsx
│   │   │   │   ├── nav-dropdown.tsx
│   │   │   │   ├── nav-elements.tsx
│   │   │   │   └── nav-subheader.tsx
│   │   │   ├── horizontal/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-item.tsx
│   │   │   │   ├── nav-list.tsx
│   │   │   │   └── nav-section-horizontal.tsx
│   │   │   ├── mini/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-item.tsx
│   │   │   │   ├── nav-list.tsx
│   │   │   │   └── nav-section-mini.tsx
│   │   │   ├── styles/
│   │   │   │   ├── classes.ts
│   │   │   │   ├── css-vars.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── nav-item-styles.tsx
│   │   │   ├── utils/
│   │   │   │   ├── create-nav-item.ts
│   │   │   │   └── index.ts
│   │   │   ├── vertical/
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-item.tsx
│   │   │   │   ├── nav-list.tsx
│   │   │   │   └── nav-section-vertical.tsx
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── number-input/
│   │   │   ├── index.ts
│   │   │   ├── number-input.tsx
│   │   │   └── styles.tsx
│   │   ├── organizational-chart/
│   │   │   ├── index.ts
│   │   │   ├── organizational-chart.tsx
│   │   │   └── types.ts
│   │   ├── phone-input/
│   │   │   ├── index.ts
│   │   │   ├── list-popover.tsx
│   │   │   ├── phone-input.tsx
│   │   │   └── types.ts
│   │   ├── progress-bar/
│   │   │   ├── index.ts
│   │   │   ├── progress-bar.tsx
│   │   │   └── styles.css
│   │   ├── scrollbar/
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   ├── scrollbar.tsx
│   │   │   ├── styles.css
│   │   │   └── types.ts
│   │   ├── search-not-found/
│   │   │   ├── index.ts
│   │   │   └── search-not-found.tsx
│   │   ├── settings/
│   │   │   ├── context/
│   │   │   │   ├── index.ts
│   │   │   │   ├── settings-context.ts
│   │   │   │   ├── settings-provider.tsx
│   │   │   │   └── use-settings-context.ts
│   │   │   ├── drawer/
│   │   │   │   ├── base-option.tsx
│   │   │   │   ├── font-options.tsx
│   │   │   │   ├── fullscreen-button.tsx
│   │   │   │   ├── icons.tsx
│   │   │   │   ├── index.ts
│   │   │   │   ├── nav-layout-option.tsx
│   │   │   │   ├── presets-options.tsx
│   │   │   │   ├── settings-drawer.tsx
│   │   │   │   └── styles.tsx
│   │   │   ├── index.ts
│   │   │   ├── settings-config.ts
│   │   │   └── types.ts
│   │   ├── snackbar/
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   ├── snackbar.tsx
│   │   │   └── styles.tsx
│   │   ├── svg-color/
│   │   │   ├── classes.ts
│   │   │   ├── index.ts
│   │   │   ├── svg-color.tsx
│   │   │   └── types.ts
│   │   ├── table/
│   │   │   ├── index.ts
│   │   │   ├── table-empty-rows.tsx
│   │   │   ├── table-head-custom.tsx
│   │   │   ├── table-no-data.tsx
│   │   │   ├── table-pagination-custom.tsx
│   │   │   ├── table-selected-action.tsx
│   │   │   ├── table-skeleton.tsx
│   │   │   ├── use-table.ts
│   │   │   └── utils.ts
│   │   └── upload/
│   │       ├── avatar/
│   │       │   ├── styles.tsx
│   │       │   └── upload-avatar.tsx
│   │       ├── box/
│   │       │   ├── styles.tsx
│   │       │   └── upload-box.tsx
│   │       ├── components/
│   │       │   ├── multi-file-preview.tsx
│   │       │   ├── rejected-files.tsx
│   │       │   └── single-file-preview.tsx
│   │       ├── default/
│   │       │   ├── styles.tsx
│   │       │   └── upload-default.tsx
│   │       ├── classes.ts
│   │       ├── index.ts
│   │       └── types.ts
│   ├── layouts/
│   │   ├── auth-centered/
│   │   │   ├── content.tsx
│   │   │   ├── index.ts
│   │   │   └── layout.tsx
│   │   ├── auth-split/
│   │   │   ├── content.tsx
│   │   │   ├── index.ts
│   │   │   ├── layout.tsx
│   │   │   └── section.tsx
│   │   ├── components/
│   │   │   ├── notifications-drawer/
│   │   │   │   ├── icons.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── notification-item.tsx
│   │   │   ├── searchbar/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── result-item.tsx
│   │   │   │   └── utils.ts
│   │   │   ├── account-button.tsx
│   │   │   ├── account-drawer.tsx
│   │   │   ├── account-popover.tsx
│   │   │   ├── contacts-popover.tsx
│   │   │   ├── language-popover.tsx
│   │   │   ├── menu-button.tsx
│   │   │   ├── nav-toggle-button.tsx
│   │   │   ├── nav-upgrade.tsx
│   │   │   ├── settings-button.tsx
│   │   │   ├── sign-in-button.tsx
│   │   │   ├── sign-out-button.tsx
│   │   │   └── workspaces-popover.tsx
│   │   ├── core/
│   │   │   ├── classes.ts
│   │   │   ├── css-vars.ts
│   │   │   ├── header-section.tsx
│   │   │   ├── index.ts
│   │   │   ├── layout-section.tsx
│   │   │   └── main-section.tsx
│   │   ├── dashboard/
│   │   │   ├── content.tsx
│   │   │   ├── css-vars.ts
│   │   │   ├── index.ts
│   │   │   ├── layout.tsx
│   │   │   ├── nav-horizontal.tsx
│   │   │   ├── nav-mobile.tsx
│   │   │   └── nav-vertical.tsx
│   │   ├── main/
│   │   │   ├── nav/
│   │   │   │   ├── components/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── desktop/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── mobile/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── types.ts
│   │   │   ├── footer.tsx
│   │   │   ├── index.ts
│   │   │   └── layout.tsx
│   │   ├── simple/
│   │   │   ├── content.tsx
│   │   │   ├── index.ts
│   │   │   └── layout.tsx
│   │   ├── nav-config-account.tsx
│   │   ├── nav-config-dashboard.tsx
│   │   ├── nav-config-main-demo.tsx
│   │   ├── nav-config-main.tsx
│   │   └── nav-config-workspace.tsx
│   ├── lib/
│   │   ├── axios.ts
│   │   ├── firebase.ts
│   │   └── supabase.ts
│   ├── locales/
│   │   ├── langs/
│   │   │   ├── ar/
│   │   │   │   ├── common.json
│   │   │   │   ├── messages.json
│   │   │   │   └── navbar.json
│   │   │   ├── cn/
│   │   │   │   ├── common.json
│   │   │   │   ├── messages.json
│   │   │   │   └── navbar.json
│   │   │   ├── en/
│   │   │   │   ├── common.json
│   │   │   │   ├── messages.json
│   │   │   │   └── navbar.json
│   │   │   ├── fr/
│   │   │   │   ├── common.json
│   │   │   │   ├── messages.json
│   │   │   │   └── navbar.json
│   │   │   └── vi/
│   │   │       ├── common.json
│   │   │       ├── messages.json
│   │   │       └── navbar.json
│   │   ├── utils/
│   │   │   └── number-format-locale.ts
│   │   ├── i18n-provider.tsx
│   │   ├── index.ts
│   │   ├── locales-config.ts
│   │   ├── localization-provider.tsx
│   │   └── use-locales.ts
│   ├── pages/
│   │   ├── about-us/
│   │   │   └── index.tsx
│   │   ├── auth/
│   │   │   ├── amplify/
│   │   │   │   ├── reset-password.tsx
│   │   │   │   ├── sign-in.tsx
│   │   │   │   ├── sign-up.tsx
│   │   │   │   ├── update-password.tsx
│   │   │   │   └── verify.tsx
│   │   │   ├── auth0/
│   │   │   │   ├── callback.tsx
│   │   │   │   └── sign-in.tsx
│   │   │   ├── firebase/
│   │   │   │   ├── reset-password.tsx
│   │   │   │   ├── sign-in.tsx
│   │   │   │   ├── sign-up.tsx
│   │   │   │   └── verify.tsx
│   │   │   ├── jwt/
│   │   │   │   ├── sign-in.tsx
│   │   │   │   └── sign-up.tsx
│   │   │   └── supabase/
│   │   │       ├── reset-password.tsx
│   │   │       ├── sign-in.tsx
│   │   │       ├── sign-up.tsx
│   │   │       ├── update-password.tsx
│   │   │       └── verify.tsx
│   │   ├── auth-demo/
│   │   │   ├── centered/
│   │   │   │   ├── reset-password.tsx
│   │   │   │   ├── sign-in.tsx
│   │   │   │   ├── sign-up.tsx
│   │   │   │   ├── update-password.tsx
│   │   │   │   └── verify.tsx
│   │   │   └── split/
│   │   │       ├── reset-password.tsx
│   │   │       ├── sign-in.tsx
│   │   │       ├── sign-up.tsx
│   │   │       ├── update-password.tsx
│   │   │       └── verify.tsx
│   │   ├── blank/
│   │   │   └── index.tsx
│   │   ├── coming-soon/
│   │   │   └── index.tsx
│   │   ├── components/
│   │   │   ├── extra/
│   │   │   │   ├── animate/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── carousel/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── chart/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── dnd/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── editor/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── form-validation/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── form-wizard/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── image/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── label/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── layout/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── lightbox/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── map/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── markdown/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── mega-menu/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── multi-language/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── navigation-bar/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── organization-chart/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── scroll-progress/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── scrollbar/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── snackbar/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── upload/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── utilities/
│   │   │   │       └── ... (profundidade máxima atingida)
│   │   │   ├── foundation/
│   │   │   │   ├── colors/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── grid/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── icons/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── shadows/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── typography/
│   │   │   │       └── ... (profundidade máxima atingida)
│   │   │   ├── mui/
│   │   │   │   ├── accordion/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── alert/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── autocomplete/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── avatar/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── badge/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── breadcrumbs/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── buttons/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── checkbox/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── chip/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── data-grid/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── date-pickers/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── dialog/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── drawer/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── list/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── menu/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── pagination/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── popover/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── progress/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── radio-button/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── rating/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── slider/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── stepper/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── switch/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── table/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── tabs/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── text-field/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── timeline/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── tooltip/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── transfer-list/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── tree-view/
│   │   │   │       └── ... (profundidade máxima atingida)
│   │   │   └── index.tsx
│   │   ├── contact-us/
│   │   │   └── index.tsx
│   │   ├── dashboard/
│   │   │   ├── analytics/
│   │   │   │   └── index.tsx
│   │   │   ├── banking/
│   │   │   │   └── index.tsx
│   │   │   ├── blank/
│   │   │   │   └── index.tsx
│   │   │   ├── booking/
│   │   │   │   └── index.tsx
│   │   │   ├── calendar/
│   │   │   │   └── index.tsx
│   │   │   ├── chat/
│   │   │   │   └── index.tsx
│   │   │   ├── course/
│   │   │   │   └── index.tsx
│   │   │   ├── ecommerce/
│   │   │   │   └── index.tsx
│   │   │   ├── file/
│   │   │   │   └── index.tsx
│   │   │   ├── file-manager/
│   │   │   │   └── index.tsx
│   │   │   ├── invoice/
│   │   │   │   ├── details.tsx
│   │   │   │   ├── edit.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   └── new.tsx
│   │   │   ├── job/
│   │   │   │   ├── details.tsx
│   │   │   │   ├── edit.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   └── new.tsx
│   │   │   ├── kanban/
│   │   │   │   └── index.tsx
│   │   │   ├── mail/
│   │   │   │   └── index.tsx
│   │   │   ├── order/
│   │   │   │   ├── details.tsx
│   │   │   │   └── list.tsx
│   │   │   ├── params/
│   │   │   │   └── index.tsx
│   │   │   ├── permission/
│   │   │   │   └── index.tsx
│   │   │   ├── post/
│   │   │   │   ├── details.tsx
│   │   │   │   ├── edit.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   └── new.tsx
│   │   │   ├── product/
│   │   │   │   ├── details.tsx
│   │   │   │   ├── edit.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   └── new.tsx
│   │   │   ├── subpaths/
│   │   │   │   └── index.tsx
│   │   │   ├── tour/
│   │   │   │   ├── details.tsx
│   │   │   │   ├── edit.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   └── new.tsx
│   │   │   ├── user/
│   │   │   │   ├── account/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── cards.tsx
│   │   │   │   ├── edit.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   ├── new.tsx
│   │   │   │   └── profile.tsx
│   │   │   └── index.tsx
│   │   ├── error/
│   │   │   ├── 403.tsx
│   │   │   ├── 404.tsx
│   │   │   └── 500.tsx
│   │   ├── faqs/
│   │   │   └── index.tsx
│   │   ├── maintenance/
│   │   │   └── index.tsx
│   │   ├── payment/
│   │   │   └── index.tsx
│   │   ├── post/
│   │   │   ├── details.tsx
│   │   │   └── list.tsx
│   │   ├── pricing/
│   │   │   └── index.tsx
│   │   ├── product/
│   │   │   ├── checkout.tsx
│   │   │   ├── details.tsx
│   │   │   └── list.tsx
│   │   └── home.tsx
│   ├── routes/
│   │   ├── components/
│   │   │   ├── error-boundary.tsx
│   │   │   ├── index.ts
│   │   │   └── router-link.tsx
│   │   ├── hooks/
│   │   │   ├── index.ts
│   │   │   ├── use-params.ts
│   │   │   ├── use-pathname.ts
│   │   │   ├── use-router.ts
│   │   │   └── use-search-params.ts
│   │   ├── sections/
│   │   │   ├── auth-demo.tsx
│   │   │   ├── auth.tsx
│   │   │   ├── components.tsx
│   │   │   ├── dashboard.tsx
│   │   │   ├── index.tsx
│   │   │   └── main.tsx
│   │   └── paths.ts
│   ├── sections/
│   │   ├── _examples/
│   │   │   ├── extra/
│   │   │   │   ├── animate-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── carousel-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── chart-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── dnd-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── editor-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── form-validation-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── form-wizard-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── image-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── label-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── layout-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── lightbox-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── map-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── markdown-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── mega-menu-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── multi-language-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── navigation-bar-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── organizational-chart-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── scroll-progress-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── scrollbar-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── snackbar-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── upload-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── utilities-view/
│   │   │   │       └── ... (profundidade máxima atingida)
│   │   │   ├── foundation/
│   │   │   │   ├── colors-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── grid-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── icons-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── shadows-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── typography-view/
│   │   │   │       └── ... (profundidade máxima atingida)
│   │   │   ├── layout/
│   │   │   │   ├── classes.ts
│   │   │   │   ├── component-box.tsx
│   │   │   │   ├── component-card.tsx
│   │   │   │   ├── component-layout.tsx
│   │   │   │   ├── component-nav-item.tsx
│   │   │   │   ├── component-nav.tsx
│   │   │   │   ├── component-search.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── nav-config-components.ts
│   │   │   ├── mui/
│   │   │   │   ├── accordion-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── alert-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── autocomplete-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── avatar-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── badge-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── breadcrumbs-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── button-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── checkbox-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── chip-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── data-grid-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── date-pickers-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── dialog-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── drawer-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── list-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── menu-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── pagination-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── popover-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── progress-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── radio-button-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── rating-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── slider-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── stepper-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── switch-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── table-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── tabs-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── text-field-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── timeline-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── tooltip-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── transfer-list-view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   └── tree-view/
│   │   │   │       └── ... (profundidade máxima atingida)
│   │   │   └── view.tsx
│   │   ├── about/
│   │   │   ├── view/
│   │   │   │   ├── about-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── about-hero.tsx
│   │   │   ├── about-team.tsx
│   │   │   ├── about-testimonials.tsx
│   │   │   ├── about-vision.tsx
│   │   │   └── about-what.tsx
│   │   ├── account/
│   │   │   ├── view/
│   │   │   │   ├── account-billing-view.tsx
│   │   │   │   ├── account-change-password-view.tsx
│   │   │   │   ├── account-general-view.tsx
│   │   │   │   ├── account-notifications-view.tsx
│   │   │   │   ├── account-socials-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── account-billing-address.tsx
│   │   │   ├── account-billing-history.tsx
│   │   │   ├── account-billing-payment.tsx
│   │   │   ├── account-billing-plan.tsx
│   │   │   ├── account-billing.tsx
│   │   │   ├── account-change-password.tsx
│   │   │   ├── account-general.tsx
│   │   │   ├── account-layout.tsx
│   │   │   ├── account-notifications.tsx
│   │   │   └── account-socials.tsx
│   │   ├── address/
│   │   │   ├── address-create-form.tsx
│   │   │   ├── address-item.tsx
│   │   │   ├── address-list-dialog.tsx
│   │   │   └── index.ts
│   │   ├── blank/
│   │   │   └── view.tsx
│   │   ├── blog/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   ├── post-create-view.tsx
│   │   │   │   ├── post-details-home-view.tsx
│   │   │   │   ├── post-details-view.tsx
│   │   │   │   ├── post-edit-view.tsx
│   │   │   │   ├── post-list-home-view.tsx
│   │   │   │   └── post-list-view.tsx
│   │   │   ├── post-comment-form.tsx
│   │   │   ├── post-comment-item.tsx
│   │   │   ├── post-comment-list.tsx
│   │   │   ├── post-create-edit-form.tsx
│   │   │   ├── post-details-hero.tsx
│   │   │   ├── post-details-preview.tsx
│   │   │   ├── post-details-toolbar.tsx
│   │   │   ├── post-item-horizontal.tsx
│   │   │   ├── post-item.tsx
│   │   │   ├── post-list-horizontal.tsx
│   │   │   ├── post-list.tsx
│   │   │   ├── post-search.tsx
│   │   │   ├── post-skeleton.tsx
│   │   │   └── post-sort.tsx
│   │   ├── calendar/
│   │   │   ├── hooks/
│   │   │   │   ├── use-calendar.ts
│   │   │   │   └── use-event.ts
│   │   │   ├── view/
│   │   │   │   ├── calendar-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── calendar-filters-result.tsx
│   │   │   ├── calendar-filters.tsx
│   │   │   ├── calendar-form.tsx
│   │   │   ├── calendar-toolbar.tsx
│   │   │   └── styles.tsx
│   │   ├── chat/
│   │   │   ├── hooks/
│   │   │   │   ├── use-collapse-nav.ts
│   │   │   │   └── use-messages-scroll.ts
│   │   │   ├── utils/
│   │   │   │   ├── get-message.ts
│   │   │   │   ├── get-nav-item.ts
│   │   │   │   └── initial-conversation.ts
│   │   │   ├── view/
│   │   │   │   ├── chat-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── chat-header-compose.tsx
│   │   │   ├── chat-header-details.tsx
│   │   │   ├── chat-message-input.tsx
│   │   │   ├── chat-message-item.tsx
│   │   │   ├── chat-message-list.tsx
│   │   │   ├── chat-nav-account.tsx
│   │   │   ├── chat-nav-item.tsx
│   │   │   ├── chat-nav-search-results.tsx
│   │   │   ├── chat-nav.tsx
│   │   │   ├── chat-room-attachments.tsx
│   │   │   ├── chat-room-group.tsx
│   │   │   ├── chat-room-participant-dialog.tsx
│   │   │   ├── chat-room-single.tsx
│   │   │   ├── chat-room.tsx
│   │   │   ├── chat-skeleton.tsx
│   │   │   ├── layout.tsx
│   │   │   └── styles.tsx
│   │   ├── checkout/
│   │   │   ├── context/
│   │   │   │   ├── checkout-context.ts
│   │   │   │   ├── checkout-provider.tsx
│   │   │   │   ├── index.ts
│   │   │   │   └── use-checkout-context.ts
│   │   │   ├── view/
│   │   │   │   ├── checkout-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── checkout-billing-address.tsx
│   │   │   ├── checkout-billing-info.tsx
│   │   │   ├── checkout-cart-product-list.tsx
│   │   │   ├── checkout-cart-product.tsx
│   │   │   ├── checkout-cart.tsx
│   │   │   ├── checkout-delivery.tsx
│   │   │   ├── checkout-order-complete.tsx
│   │   │   ├── checkout-payment-methods.tsx
│   │   │   ├── checkout-payment.tsx
│   │   │   ├── checkout-steps.tsx
│   │   │   └── checkout-summary.tsx
│   │   ├── coming-soon/
│   │   │   └── view.tsx
│   │   ├── contact/
│   │   │   ├── view/
│   │   │   │   ├── contact-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── contact-form.tsx
│   │   │   ├── contact-hero.tsx
│   │   │   └── contact-map.tsx
│   │   ├── error/
│   │   │   ├── 403-view.tsx
│   │   │   ├── 500-view.tsx
│   │   │   ├── index.ts
│   │   │   └── not-found-view.tsx
│   │   ├── faqs/
│   │   │   ├── view/
│   │   │   │   ├── faqs-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── faqs-category.tsx
│   │   │   ├── faqs-form.tsx
│   │   │   ├── faqs-hero.tsx
│   │   │   └── faqs-list.tsx
│   │   ├── file-manager/
│   │   │   ├── view/
│   │   │   │   ├── file-manager-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── file-data-activity.tsx
│   │   │   ├── file-manager-action-selected.tsx
│   │   │   ├── file-manager-create-folder-dialog.tsx
│   │   │   ├── file-manager-file-details.tsx
│   │   │   ├── file-manager-file-item-slots.tsx
│   │   │   ├── file-manager-file-item.tsx
│   │   │   ├── file-manager-filters-result.tsx
│   │   │   ├── file-manager-filters.tsx
│   │   │   ├── file-manager-folder-item.tsx
│   │   │   ├── file-manager-grid-view.tsx
│   │   │   ├── file-manager-invited-item.tsx
│   │   │   ├── file-manager-panel.tsx
│   │   │   ├── file-manager-share-dialog.tsx
│   │   │   ├── file-manager-table-row.tsx
│   │   │   ├── file-manager-table.tsx
│   │   │   ├── file-recent-item.tsx
│   │   │   ├── file-storage-overview.tsx
│   │   │   ├── file-upgrade.tsx
│   │   │   └── file-widget.tsx
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── hero-background.tsx
│   │   │   │   ├── hero-svg.tsx
│   │   │   │   ├── section-title.tsx
│   │   │   │   └── svg-elements.tsx
│   │   │   ├── view/
│   │   │   │   ├── home-view.tsx
│   │   │   │   └── index.ts
│   │   │   ├── home-community.tsx
│   │   │   ├── home-ecosystem.tsx
│   │   │   ├── home-faqs.tsx
│   │   │   ├── home-final-cta.tsx
│   │   │   ├── home-hero.tsx
│   │   │   ├── home-integrations.tsx
│   │   │   ├── home-latest-news.tsx
│   │   │   ├── home-roadmap.tsx
│   │   │   └── home-team.tsx
│   │   ├── invoice/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   ├── invoice-create-view.tsx
│   │   │   │   ├── invoice-details-view.tsx
│   │   │   │   ├── invoice-edit-view.tsx
│   │   │   │   └── invoice-list-view.tsx
│   │   │   ├── invoice-analytic.tsx
│   │   │   ├── invoice-create-edit-address.tsx
│   │   │   ├── invoice-create-edit-details.tsx
│   │   │   ├── invoice-create-edit-form.tsx
│   │   │   ├── invoice-create-edit-status-date.tsx
│   │   │   ├── invoice-details.tsx
│   │   │   ├── invoice-pdf.tsx
│   │   │   ├── invoice-table-filters-result.tsx
│   │   │   ├── invoice-table-row.tsx
│   │   │   ├── invoice-table-toolbar.tsx
│   │   │   ├── invoice-toolbar.tsx
│   │   │   └── invoice-total-summary.tsx
│   │   ├── job/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   ├── job-create-view.tsx
│   │   │   │   ├── job-details-view.tsx
│   │   │   │   ├── job-edit-view.tsx
│   │   │   │   └── job-list-view.tsx
│   │   │   ├── job-create-edit-form.tsx
│   │   │   ├── job-details-candidates.tsx
│   │   │   ├── job-details-content.tsx
│   │   │   ├── job-details-toolbar.tsx
│   │   │   ├── job-filters-result.tsx
│   │   │   ├── job-filters.tsx
│   │   │   ├── job-item.tsx
│   │   │   ├── job-list.tsx
│   │   │   ├── job-search.tsx
│   │   │   └── job-sort.tsx
│   │   ├── kanban/
│   │   │   ├── column/
│   │   │   │   ├── kanban-column-add.tsx
│   │   │   │   ├── kanban-column-toolbar.tsx
│   │   │   │   ├── kanban-column.tsx
│   │   │   │   └── styles.tsx
│   │   │   ├── components/
│   │   │   │   ├── kanban-contacts-dialog.tsx
│   │   │   │   ├── kanban-input-name.tsx
│   │   │   │   ├── kanban-skeleton.tsx
│   │   │   │   └── kanban-task-add.tsx
│   │   │   ├── details/
│   │   │   │   ├── kanban-details-attachments.tsx
│   │   │   │   ├── kanban-details-comment-input.tsx
│   │   │   │   ├── kanban-details-comment-list.tsx
│   │   │   │   ├── kanban-details-priority.tsx
│   │   │   │   ├── kanban-details-toolbar.tsx
│   │   │   │   └── kanban-details.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-board-dnd.tsx
│   │   │   │   ├── use-column-dnd.tsx
│   │   │   │   └── use-task-item-dnd.tsx
│   │   │   ├── item/
│   │   │   │   ├── kanban-task-item.tsx
│   │   │   │   └── styles.tsx
│   │   │   ├── utils/
│   │   │   │   ├── bind-event-listener.ts
│   │   │   │   ├── helpers.ts
│   │   │   │   └── process-data.ts
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   └── kanban-view.tsx
│   │   │   └── classes.ts
│   │   ├── mail/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   └── mail-view.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── mail-compose.tsx
│   │   │   ├── mail-details.tsx
│   │   │   ├── mail-header.tsx
│   │   │   ├── mail-item.tsx
│   │   │   ├── mail-list.tsx
│   │   │   ├── mail-nav-item.tsx
│   │   │   ├── mail-nav.tsx
│   │   │   └── mail-skeleton.tsx
│   │   ├── maintenance/
│   │   │   └── view.tsx
│   │   ├── order/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   ├── order-details-view.tsx
│   │   │   │   └── order-list-view.tsx
│   │   │   ├── order-details-customer.tsx
│   │   │   ├── order-details-delivery.tsx
│   │   │   ├── order-details-history.tsx
│   │   │   ├── order-details-items.tsx
│   │   │   ├── order-details-payment.tsx
│   │   │   ├── order-details-shipping.tsx
│   │   │   ├── order-details-toolbar.tsx
│   │   │   ├── order-table-filters-result.tsx
│   │   │   ├── order-table-row.tsx
│   │   │   └── order-table-toolbar.tsx
│   │   ├── overview/
│   │   │   ├── analytics/
│   │   │   │   ├── view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── analytics-conversion-rates.tsx
│   │   │   │   ├── analytics-current-subject.tsx
│   │   │   │   ├── analytics-current-visits.tsx
│   │   │   │   ├── analytics-news.tsx
│   │   │   │   ├── analytics-order-timeline.tsx
│   │   │   │   ├── analytics-tasks.tsx
│   │   │   │   ├── analytics-traffic-by-site.tsx
│   │   │   │   ├── analytics-website-visits.tsx
│   │   │   │   └── analytics-widget-summary.tsx
│   │   │   ├── app/
│   │   │   │   ├── view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── app-area-installed.tsx
│   │   │   │   ├── app-current-download.tsx
│   │   │   │   ├── app-featured.tsx
│   │   │   │   ├── app-new-invoices.tsx
│   │   │   │   ├── app-top-authors.tsx
│   │   │   │   ├── app-top-installed-countries.tsx
│   │   │   │   ├── app-top-related.tsx
│   │   │   │   ├── app-welcome.tsx
│   │   │   │   ├── app-widget-summary.tsx
│   │   │   │   └── app-widget.tsx
│   │   │   ├── banking/
│   │   │   │   ├── view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── banking-balance-statistics.tsx
│   │   │   │   ├── banking-contacts.tsx
│   │   │   │   ├── banking-current-balance.tsx
│   │   │   │   ├── banking-expenses-categories.tsx
│   │   │   │   ├── banking-invite-friends.tsx
│   │   │   │   ├── banking-overview.tsx
│   │   │   │   ├── banking-quick-transfer.tsx
│   │   │   │   └── banking-recent-transitions.tsx
│   │   │   ├── booking/
│   │   │   │   ├── view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── booking-available.tsx
│   │   │   │   ├── booking-booked.tsx
│   │   │   │   ├── booking-check-in-widgets.tsx
│   │   │   │   ├── booking-customer-reviews.tsx
│   │   │   │   ├── booking-details.tsx
│   │   │   │   ├── booking-newest.tsx
│   │   │   │   ├── booking-statistics.tsx
│   │   │   │   ├── booking-total-incomes.tsx
│   │   │   │   └── booking-widget-summary.tsx
│   │   │   ├── course/
│   │   │   │   ├── view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── course-continue.tsx
│   │   │   │   ├── course-featured.tsx
│   │   │   │   ├── course-hours-spent.tsx
│   │   │   │   ├── course-my-account.tsx
│   │   │   │   ├── course-my-strength.tsx
│   │   │   │   ├── course-progress.tsx
│   │   │   │   ├── course-reminders.tsx
│   │   │   │   └── course-widget-summary.tsx
│   │   │   ├── e-commerce/
│   │   │   │   ├── view/
│   │   │   │   │   └── ... (profundidade máxima atingida)
│   │   │   │   ├── ecommerce-best-salesman.tsx
│   │   │   │   ├── ecommerce-current-balance.tsx
│   │   │   │   ├── ecommerce-latest-products.tsx
│   │   │   │   ├── ecommerce-new-products.tsx
│   │   │   │   ├── ecommerce-sale-by-gender.tsx
│   │   │   │   ├── ecommerce-sales-overview.tsx
│   │   │   │   ├── ecommerce-welcome.tsx
│   │   │   │   ├── ecommerce-widget-summary.tsx
│   │   │   │   └── ecommerce-yearly-sales.tsx
│   │   │   └── file/
│   │   │       └── view/
│   │   │           └── ... (profundidade máxima atingida)
│   │   ├── payment/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   └── payment-view.tsx
│   │   │   ├── payment-billing-address.tsx
│   │   │   ├── payment-card-create-form.tsx
│   │   │   ├── payment-card-item.tsx
│   │   │   ├── payment-card-list-dialog.tsx
│   │   │   ├── payment-methods.tsx
│   │   │   └── payment-summary.tsx
│   │   ├── permission/
│   │   │   └── view.tsx
│   │   ├── pricing/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   └── pricing-view.tsx
│   │   │   └── pricing-card.tsx
│   │   ├── product/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   ├── product-create-view.tsx
│   │   │   │   ├── product-details-view.tsx
│   │   │   │   ├── product-edit-view.tsx
│   │   │   │   ├── product-list-view.tsx
│   │   │   │   ├── product-shop-details-view.tsx
│   │   │   │   └── product-shop-view.tsx
│   │   │   ├── cart-icon.tsx
│   │   │   ├── product-create-edit-form.tsx
│   │   │   ├── product-details-carousel.tsx
│   │   │   ├── product-details-description.tsx
│   │   │   ├── product-details-review.tsx
│   │   │   ├── product-details-summary.tsx
│   │   │   ├── product-details-toolbar.tsx
│   │   │   ├── product-filters-drawer.tsx
│   │   │   ├── product-filters-result.tsx
│   │   │   ├── product-item.tsx
│   │   │   ├── product-list.tsx
│   │   │   ├── product-review-create-form.tsx
│   │   │   ├── product-review-item.tsx
│   │   │   ├── product-review-list.tsx
│   │   │   ├── product-search.tsx
│   │   │   ├── product-skeleton.tsx
│   │   │   ├── product-sort.tsx
│   │   │   ├── product-table-filters-result.tsx
│   │   │   ├── product-table-row.tsx
│   │   │   └── product-table-toolbar.tsx
│   │   ├── tour/
│   │   │   ├── view/
│   │   │   │   ├── index.ts
│   │   │   │   ├── tour-create-view.tsx
│   │   │   │   ├── tour-details-view.tsx
│   │   │   │   ├── tour-edit-view.tsx
│   │   │   │   └── tour-list-view.tsx
│   │   │   ├── tour-create-edit-form.tsx
│   │   │   ├── tour-details-bookers.tsx
│   │   │   ├── tour-details-content.tsx
│   │   │   ├── tour-details-toolbar.tsx
│   │   │   ├── tour-filters-result.tsx
│   │   │   ├── tour-filters.tsx
│   │   │   ├── tour-item.tsx
│   │   │   ├── tour-list.tsx
│   │   │   ├── tour-search.tsx
│   │   │   └── tour-sort.tsx
│   │   └── user/
│   │       ├── view/
│   │       │   ├── index.ts
│   │       │   ├── user-cards-view.tsx
│   │       │   ├── user-create-view.tsx
│   │       │   ├── user-edit-view.tsx
│   │       │   ├── user-list-view.tsx
│   │       │   └── user-profile-view.tsx
│   │       ├── profile-cover.tsx
│   │       ├── profile-followers.tsx
│   │       ├── profile-friends.tsx
│   │       ├── profile-gallery.tsx
│   │       ├── profile-home.tsx
│   │       ├── profile-post-item.tsx
│   │       ├── user-card-list.tsx
│   │       ├── user-card.tsx
│   │       ├── user-create-edit-form.tsx
│   │       ├── user-quick-edit-form.tsx
│   │       ├── user-table-filters-result.tsx
│   │       ├── user-table-row.tsx
│   │       └── user-table-toolbar.tsx
│   ├── theme/
│   │   ├── core/
│   │   │   ├── components/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── appbar.tsx
│   │   │   │   ├── autocomplete.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── backdrop.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumbs.tsx
│   │   │   │   ├── button-fab.tsx
│   │   │   │   ├── button-group.tsx
│   │   │   │   ├── button-icon.tsx
│   │   │   │   ├── button-toggle.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── chip.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── index.ts
│   │   │   │   ├── link.tsx
│   │   │   │   ├── list.tsx
│   │   │   │   ├── menu.tsx
│   │   │   │   ├── mui-x-data-grid.tsx
│   │   │   │   ├── mui-x-date-picker.tsx
│   │   │   │   ├── mui-x-tree-view.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── paper.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio.tsx
│   │   │   │   ├── rating.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── stack.tsx
│   │   │   │   ├── stepper.tsx
│   │   │   │   ├── svg-icon.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── text-field.tsx
│   │   │   │   ├── timeline.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── mixins/
│   │   │   │   ├── background.ts
│   │   │   │   ├── border.ts
│   │   │   │   ├── global-styles-components.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── mixins.ts
│   │   │   │   └── text.ts
│   │   │   ├── custom-shadows.ts
│   │   │   ├── index.ts
│   │   │   ├── opacity.ts
│   │   │   ├── palette.ts
│   │   │   ├── shadows.ts
│   │   │   └── typography.ts
│   │   ├── with-settings/
│   │   │   ├── color-presets.ts
│   │   │   ├── index.ts
│   │   │   ├── right-to-left.tsx
│   │   │   ├── update-components.ts
│   │   │   └── update-core.ts
│   │   ├── create-classes.ts
│   │   ├── create-theme.ts
│   │   ├── extend-theme-types.d.ts
│   │   ├── index.ts
│   │   ├── theme-config.ts
│   │   ├── theme-overrides.ts
│   │   ├── theme-provider.tsx
│   │   └── types.ts
│   ├── types/
│   │   ├── blog.ts
│   │   ├── calendar.ts
│   │   ├── chat.ts
│   │   ├── checkout.ts
│   │   ├── common.ts
│   │   ├── file.ts
│   │   ├── invoice.ts
│   │   ├── job.ts
│   │   ├── kanban.ts
│   │   ├── mail.ts
│   │   ├── order.ts
│   │   ├── product.ts
│   │   ├── tour.ts
│   │   └── user.ts
│   ├── utils/
│   │   ├── format-number.ts
│   │   └── format-time.ts
│   ├── app.tsx
│   ├── global-config.ts
│   ├── global.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .editorconfig
├── .env
├── .gitignore
├── .prettierignore
├── audit.js
├── eslint.config.mjs
├── index.html
├── LICENSE.md
├── package.json
├── pnpm-lock.yaml
├── prettier.config.mjs
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts

```

## 2. ⚙️ CONFIGURAÇÕES CRÍTICAS (Frontend)

### 📄 package.json (✅ Encontrado)
```jsonc
{
  "name": "@minimal-kit/vite-ts",
  "author": "Minimals",
  "version": "7.5.0",
  "description": "Vite & TypeScript",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "start": "vite preview",
    "build": "tsc && vite build",
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint:fix": "eslint --fix \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint:print": "npx eslint --print-config eslint.config.mjs > eslint-show-config.json",
    "fm:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx}\"",
    "fm:fix": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\"",
    "fix:all": "pnpm run lint:fix && pnpm run fm:fix",
    "clean": "rm -rf node_modules .next out dist build",
    "re:dev": "pnpm run clean && pnpm install && pnpm run dev",
    "re:build": "pnpm run clean && pnpm install && pnpm run build",
    "re:build-npm": "pnpm run clean && pnpm install && pnpm run build",
    "tsc:dev": "pnpm run dev & pnpm run tsc:watch",
    "tsc:watch": "tsc --noEmit --watch",
    "tsc:print": "npx tsc --showConfig"
  },
  "engines": {
    "node": ">=20"
  },
  "packageManager": "pnpm@9.1.0",
  "dependencies": {
    "@atlaskit/pragmatic-drag-and-drop": "^1.7.7",
    "@atlaskit/pragmatic-drag-and-drop-auto-scroll": "^2.1.2",
    "@atlaskit/pragmatic-drag-and-drop-hitbox": "^1.1.0",
    "@auth0/auth0-react": "^2.5.0",
    "@emotion/cache": "^11.14.0",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@fontsource-variable/dm-sans": "^5.2.8",
    "@fontsource-variable/inter": "^5.2.8",
    "@fontsource-variable/nunito-sans": "^5.2.7",
    "@fontsource-variable/public-sans": "^5.2.7",
    "@fontsource/barlow": "^5.2.8",
    "@fullcalendar/core": "^6.1.19",
    "@fullcalendar/daygrid": "^6.1.19",
    "@fullcalendar/interaction": "^6.1.19",
    "@fullcalendar/list": "^6.1.19",
    "@fullcalendar/react": "^6.1.19",
    "@fullcalendar/timegrid": "^6.1.19",
    "@fullcalendar/timeline": "^6.1.19",
    "@hookform/resolvers": "^5.2.2",
    "@iconify/
... (arquivo truncado)
```

### 📄 vite.config.ts (✅ Encontrado)
```jsonc
import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ----------------------------------------------------------------------

const PORT = 8080;

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        dev: { logLevel: ['error'] },
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^src(.+)/,
        replacement: path.resolve(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
});

```

### 📄 tsconfig.json (✅ Encontrado)
```jsonc
{
  "compilerOptions": {
    /* Bundler */
    "baseUrl": ".",
    "module": "ESNext",
    "jsx": "react-jsx",
    "allowJs": true,
    "resolveJsonModule": true,

    /* Build */
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "incremental": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,

    /* Linting */
    "strict": true,
    "noEmit": true,
    "strictNullChecks": true
  },
  "include": ["src"],
  "exclude": ["node_modules"],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}

```

### 📄 tsconfig.node.json (✅ Encontrado)
```jsonc
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

```

### 📄 index.html (✅ Encontrado)
```jsonc
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal UI Kit</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

### 📄 eslint.config.mjs (✅ Encontrado)
```jsonc
import globals from 'globals';
import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

// ----------------------------------------------------------------------

/**
 * @rules common
 * from 'react', 'eslint-plugin-react-hooks'...
 */
const commonRules = () => ({
  ...reactHooksPlugin.configs.recommended.rules,
  'func-names': 1,
  'no-bitwise': 2,
  'no-unused-vars': 0,
  'object-shorthand': 1,
  'no-useless-rename': 1,
  'default-case-last': 2,
  'consistent-return': 2,
  'no-constant-condition': 1,
  'default-case': [2, { commentPattern: '^no default$' }],
  'lines-around-directive': [2, { before: 'always', after: 'always' }],
  'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: false }],
  // react
  'react/jsx-key': 0,
  'react/prop-types': 0,
  'react/display-name': 0,
  'react/no-children-prop': 0,
  'react/jsx-boolean-value': 2,
  'react/self-closing-comp': 2,
  'react/react-in-jsx-scope': 0,
  'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
  'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
  // typescript
  '@typescript-eslint/no-shadow': 2,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-empty-object-type': 0,
  '@typescript-eslint/consistent-type-imports': 1,
  '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
});

/**
 * @rules import
 * from 'eslint-plugin-import'.
 */
const importRules = () => ({
  ...importPlugin.configs.recommended.rules,
  'import/named': 0,
  'import/export': 0,
  'import/default': 0,
  'import/namespace': 0,
  'import/no-named-as-default': 0,
  'import/newline-after-import': 2,
  'import/no-named-as-default-member': 0,
  'import/no-cycle'
... (arquivo truncado)
```

### 📄 .env (✅ Encontrado)
```text
(Conteúdo oculto por segurança)
```

### ⚠️ .env.example  (CRÍTICO)

## 3. 🛡️ VERIFICAÇÃO DE AMBIENTE E SEGURANÇA
- **React Version**: ^19.1.1
- **Vite Version**: ^7.1.7
- **TypeScript**: ✅ Sim
- **.gitignore**: ✅ Existe.
  - Ignora node_modules? ✅ Sim
  - Ignora .env? ✅ Sim
  - Ignora dist/build? ✅ Sim

## 4. 📝 DÍVIDA TÉCNICA (TODOs/FIXMEs)
- [ ] **scripts/audit-architecture-v4.js:129**: `if (line.indexOf('TODO') !== -1 || line.indexOf('FIXME') !== -1) {`
- [ ] **scripts/audit-architecture-v4.js:165**: `## 📝 DÍVIDA TÉCNICA E TAREFAS (TODOs)`
- [ ] **scripts/audit-architecture-v4.js:166**: `${scanTodos(ROOT_DIR) || '✅ Nenhum TODO pendente encontrado.'}`

