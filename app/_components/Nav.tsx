"use client";
import React from "react";
import DLogo from "./DLogo";


const PerformanceIcon = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_169)">
            <path d="M5.15991 13.6126V12.0601" stroke="#009877" stroke-width="1.5" stroke-linecap="round" />
            <path d="M9 13.6125V10.5075" stroke="#009877" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12.8401 13.6124V8.94742" stroke="#009877" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12.8399 4.38757L12.4949 4.79257C10.5824 7.02757 8.01743 8.61007 5.15991 9.32257" stroke="#009877" stroke-width="1.5" stroke-linecap="round" />
            <path d="M10.6425 4.38757H12.84V6.57757" stroke="#009877" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#009877" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_3_169">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>


);

const AdsIcon = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_179)">
            <path d="M6.75 7.5C7.57845 7.5 8.25 6.82843 8.25 6C8.25 5.17157 7.57845 4.5 6.75 4.5C5.92157 4.5 5.25 5.17157 5.25 6C5.25 6.82843 5.92157 7.5 6.75 7.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V7.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.8125 3.75H15.9375" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
            <path d="M13.875 5.8125V1.6875" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
            <path d="M2.00256 14.2126L5.70006 11.7301C6.29256 11.3326 7.14756 11.3776 7.68003 11.8351L7.92753 12.0526C8.51253 12.5551 9.45753 12.5551 10.0425 12.0526L13.1625 9.37507C13.7475 8.87257 14.6925 8.87257 15.2775 9.37507L16.5 10.4251" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_3_179">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>

);


const OrdersIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1.5V3.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 1.5V3.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.25 9.75H11.25" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.25 12.75H9" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 2.625C14.4975 2.76 15.75 3.7125 15.75 7.2375V11.8725C15.75 14.9625 15 16.5075 11.25 16.5075H6.75C3 16.5075 2.25 14.9625 2.25 11.8725V7.2375C2.25 3.7125 3.5025 2.7675 6 2.625H12Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    ;
const OffersIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3_197)">
        <path d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.03 2.26501L6.12003 8.175C5.89503 8.4 5.67003 8.8425 5.62503 9.165L5.30253 11.4225C5.18253 12.24 5.76003 12.81 6.57753 12.6975L8.83503 12.375C9.15003 12.33 9.59253 12.105 9.82503 11.88L15.735 5.97001C16.755 4.95001 17.235 3.76501 15.735 2.26501C14.235 0.765006 13.05 1.24501 12.03 2.26501Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.1825 3.11243C11.685 4.90493 13.0875 6.30743 14.8875 6.81743" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_3_197">
            <rect width="18" height="18" fill="white" />
        </clipPath>
    </defs>
</svg>
    ;
const ClientsIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3_204)">
        <path d="M13.605 16.215C12.945 16.41 12.165 16.5 11.25 16.5H6.75001C5.83501 16.5 5.05502 16.41 4.39502 16.215C4.56002 14.265 6.56251 12.7275 9.00003 12.7275C11.4375 12.7275 13.44 14.265 13.605 16.215Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 14.085 2.355 15.6375 4.395 16.215C4.56 14.265 6.5625 12.7275 9 12.7275C11.4375 12.7275 13.44 14.265 13.605 16.215C15.645 15.6375 16.5 14.085 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5ZM9 10.6275C7.515 10.6275 6.315 9.42 6.315 7.935C6.315 6.45001 7.515 5.25 9 5.25C10.485 5.25 11.685 6.45001 11.685 7.935C11.685 9.42 10.485 10.6275 9 10.6275Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.685 7.935C11.685 9.42 10.485 10.6275 9.00003 10.6275C7.51503 10.6275 6.31506 9.42 6.31506 7.935C6.31506 6.45001 7.51503 5.25 9.00003 5.25C10.485 5.25 11.685 6.45001 11.685 7.935Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_3_204">
            <rect width="18" height="18" fill="white" />
        </clipPath>
    </defs>
</svg>
    ;
const ProfileIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.75 15.75H5.25C2.25 15.75 1.5 15 1.5 12V6C1.5 3 2.25 2.25 5.25 2.25H12.75C15.75 2.25 16.5 3 16.5 6V12C16.5 15 15.75 15.75 12.75 15.75Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.5 6H14.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.25 9H14.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.75 12H14.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.37496 8.46743C7.12469 8.46743 7.73243 7.8597 7.73243 7.10994C7.73243 6.36022 7.12469 5.75244 6.37496 5.75244C5.62523 5.75244 5.01746 6.36022 5.01746 7.10994C5.01746 7.8597 5.62523 8.46743 6.37496 8.46743Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 12.2475C8.895 11.16 8.0325 10.305 6.945 10.2075C6.57 10.17 6.1875 10.17 5.805 10.2075C4.7175 10.3125 3.855 11.16 3.75 12.2475" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    ;
const InvoicesIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3_221)">
        <path d="M16.5 4.5V6.315C16.5 7.5 15.75 8.25 14.565 8.25H12V3.0075C12 2.175 12.6825 1.5 13.515 1.5C14.3325 1.5075 15.0825 1.8375 15.6225 2.3775C16.1625 2.925 16.5 3.675 16.5 4.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.5 5.25V15.75C1.5 16.3725 2.205 16.725 2.7 16.35L3.9825 15.39C4.2825 15.165 4.7025 15.195 4.9725 15.465L6.2175 16.7175C6.51 17.01 6.99 17.01 7.2825 16.7175L8.5425 15.4575C8.805 15.195 9.225 15.165 9.5175 15.39L10.8 16.35C11.295 16.7175 12 16.365 12 15.75V3C12 2.175 12.675 1.5 13.5 1.5H5.25H4.5C2.25 1.5 1.5 2.8425 1.5 4.5V5.25Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.75 9.75751H9" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.75 6.75751H9" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.4967 9.75H4.50344" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.4967 6.75H4.50344" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_3_221">
            <rect width="18" height="18" fill="white" />
        </clipPath>
    </defs>
</svg>
    ;
const SubsIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3_231)">
        <path d="M6.75 14.25C6.75 14.8125 6.5925 15.345 6.315 15.795C5.7975 16.665 4.845 17.25 3.75 17.25C2.655 17.25 1.7025 16.665 1.185 15.795C0.9075 15.345 0.75 14.8125 0.75 14.25C0.75 12.5925 2.0925 11.25 3.75 11.25C5.4075 11.25 6.75 12.5925 6.75 14.25Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.58105 14.2496L3.32355 14.9921L4.92105 13.5146" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.3135 5.28748C13.1335 5.25748 12.946 5.24998 12.751 5.24998H5.25105C5.04105 5.24998 4.83855 5.26498 4.64355 5.29498C4.74855 5.08498 4.89855 4.89001 5.07855 4.71001L7.51605 2.265C8.54355 1.245 10.2085 1.245 11.236 2.265L12.5485 3.59247C13.0285 4.06497 13.2835 4.66498 13.3135 5.28748Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.5 9V12.75C16.5 15 15 16.5 12.75 16.5H5.7225C5.955 16.305 6.1575 16.065 6.315 15.795C6.5925 15.345 6.75 14.8125 6.75 14.25C6.75 12.5925 5.4075 11.25 3.75 11.25C2.85 11.25 2.0475 11.6475 1.5 12.27V9C1.5 6.96 2.73 5.535 4.6425 5.295C4.8375 5.265 5.04 5.25 5.25 5.25H12.75C12.945 5.25 13.1325 5.25749 13.3125 5.28749C15.2475 5.51249 16.5 6.945 16.5 9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.5 9.375H14.25C13.425 9.375 12.75 10.05 12.75 10.875C12.75 11.7 13.425 12.375 14.25 12.375H16.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_3_231">
            <rect width="18" height="18" fill="white" />
        </clipPath>
    </defs>
</svg>
    ;
const TemplateIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3_240)">
        <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.6774 13.8751V10.9501" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.6774 5.5875V4.125" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.6775 9.4875C12.7545 9.4875 13.6275 8.61443 13.6275 7.5375C13.6275 6.46051 12.7545 5.58746 11.6775 5.58746C10.6005 5.58746 9.72754 6.46051 9.72754 7.5375C9.72754 8.61443 10.6005 9.4875 11.6775 9.4875Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.32251 13.875V12.4125" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.32251 7.05V4.125" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.32244 12.4126C7.39939 12.4126 8.27247 11.5395 8.27247 10.4626C8.27247 9.38565 7.39939 8.51257 6.32244 8.51257C5.24548 8.51257 4.37244 9.38565 4.37244 10.4626C4.37244 11.5395 5.24548 12.4126 6.32244 12.4126Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_3_240">
            <rect width="18" height="18" fill="white" />
        </clipPath>
    </defs>
</svg>
    ;
const SettingsIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11.25C10.2427 11.25 11.25 10.2427 11.25 9C11.25 7.75732 10.2427 6.75 9 6.75C7.75732 6.75 6.75 7.75732 6.75 9C6.75 10.2427 7.75732 11.25 9 11.25Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M1.5 9.65992V8.33992C1.5 7.55992 2.1375 6.91495 2.925 6.91495C4.2825 6.91495 4.8375 5.95495 4.155 4.77745C3.765 4.10245 3.9975 3.22495 4.68 2.83495L5.9775 2.09245C6.57 1.73995 7.335 1.94995 7.6875 2.54245L7.77 2.68495C8.445 3.86245 9.555 3.86245 10.2375 2.68495L10.32 2.54245C10.6725 1.94995 11.4375 1.73995 12.03 2.09245L13.3275 2.83495C14.01 3.22495 14.2425 4.10245 13.8525 4.77745C13.17 5.95495 13.725 6.91495 15.0825 6.91495C15.8625 6.91495 16.5075 7.55242 16.5075 8.33992V9.65992C16.5075 10.4399 15.87 11.0849 15.0825 11.0849C13.725 11.0849 13.17 12.0449 13.8525 13.2224C14.2425 13.9049 14.01 14.7749 13.3275 15.1649L12.03 15.9074C11.4375 16.2599 10.6725 16.0499 10.32 15.4574L10.2375 15.3149C9.5625 14.1374 8.4525 14.1374 7.77 15.3149L7.6875 15.4574C7.335 16.0499 6.57 16.2599 5.9775 15.9074L4.68 15.1649C3.9975 14.7749 3.765 13.8974 4.155 13.2224C4.8375 12.0449 4.2825 11.0849 2.925 11.0849C2.1375 11.0849 1.5 10.4399 1.5 9.65992Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    ;
const ExportIcon = <svg width="86" height="18" viewBox="0 0 86 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.2155 11.306C6.44883 11.306 6.64483 11.39 6.8035 11.558C6.9715 11.7167 7.0555 11.9173 7.0555 12.16C7.0555 12.3933 6.9715 12.594 6.8035 12.762C6.64483 12.9207 6.44883 13 6.2155 13H5.7955C5.35683 13 4.96017 12.8647 4.6055 12.594L4.5915 13.056C4.52617 13.9613 4.20883 14.6893 3.6395 15.24C3.0795 15.7907 2.32817 16.1547 1.3855 16.332L0.7695 14.736C1.47883 14.596 2.0155 14.372 2.3795 14.064C2.75283 13.7653 2.9395 13.2987 2.9395 12.664V6.238H4.6195V10.13C4.6195 10.4473 4.73617 10.7227 4.9695 10.956C5.20283 11.1893 5.47817 11.306 5.7955 11.306H6.2155ZM10.7795 11.306V13H6.0475V11.306H10.7795ZM15.2365 11.306V13H10.5045V11.306H15.2365ZM19.6936 11.306V13H14.9616V11.306H19.6936ZM19.5446 13C19.3113 13 19.1106 12.916 18.9426 12.748C18.7653 12.58 18.6766 12.3793 18.6766 12.146C18.6766 11.9033 18.7606 11.7027 18.9286 11.544C19.0966 11.3853 19.3019 11.306 19.5446 11.306H21.9526C22.1299 11.306 22.2793 11.2453 22.4006 11.124C22.5219 11.0027 22.5826 10.8533 22.5826 10.676V6.238H24.2766V10.676C24.2766 11.096 24.1693 11.4833 23.9546 11.838C23.7493 12.1927 23.4646 12.4773 23.1006 12.692C22.7459 12.8973 22.3586 13 21.9386 13H19.5446ZM20.6646 14.162C20.9353 14.162 21.1686 14.2553 21.3646 14.442C21.5606 14.638 21.6586 14.8713 21.6586 15.142C21.6586 15.422 21.5606 15.6553 21.3646 15.842C21.1686 16.038 20.9353 16.136 20.6646 16.136C20.3939 16.136 20.1606 16.038 19.9646 15.842C19.7686 15.6553 19.6706 15.422 19.6706 15.142C19.6706 14.8713 19.7686 14.638 19.9646 14.442C20.1606 14.2553 20.3939 14.162 20.6646 14.162ZM23.2686 14.162C23.5393 14.162 23.7726 14.2553 23.9686 14.442C24.1646 14.638 24.2626 14.8713 24.2626 15.142C24.2626 15.422 24.1646 15.6553 23.9686 15.842C23.7726 16.038 23.5393 16.136 23.2686 16.136C22.9979 16.136 22.7646 16.038 22.5686 15.842C22.3726 15.6553 22.2746 15.422 22.2746 15.142C22.2746 14.8713 22.3726 14.638 22.5686 14.442C22.7646 14.2553 22.9979 14.162 23.2686 14.162ZM33.7367 11.306C33.9793 11.306 34.18 11.39 34.3387 11.558C34.4973 11.726 34.5767 11.9267 34.5767 12.16C34.5767 12.3933 34.4973 12.594 34.3387 12.762C34.18 12.9207 33.9793 13 33.7367 13H33.3727C32.962 13 32.57 12.93 32.1967 12.79C31.8233 12.65 31.4873 12.4493 31.1887 12.188C30.9367 12.44 30.6427 12.6407 30.3067 12.79C29.98 12.93 29.644 13 29.2987 13H25.4767V11.306H29.2987C29.4573 11.306 29.588 11.278 29.6907 11.222C29.8027 11.1567 29.8867 11.082 29.9427 10.998C30.1013 10.8393 30.1667 10.6433 30.1387 10.41L29.0047 6.21L30.6147 5.776L31.8047 10.074C31.898 10.438 32.0893 10.7367 32.3787 10.97C32.668 11.194 32.9993 11.306 33.3727 11.306H33.7367ZM46.533 11.306V13H33.569V11.306H35.081V6.238H36.761V7.47L40.233 6.42C40.6437 6.29867 41.0263 6.238 41.381 6.238C42.0343 6.238 42.6457 6.39667 43.215 6.714C43.7843 7.022 44.223 7.44667 44.531 7.988C44.867 8.548 45.035 9.17333 45.035 9.864V11.306H46.533ZM43.047 11.306C43.131 11.306 43.201 11.2733 43.257 11.208C43.3223 11.1427 43.355 11.0633 43.355 10.97V9.864C43.355 9.46267 43.2617 9.11733 43.075 8.828C42.907 8.53867 42.669 8.31467 42.361 8.156C42.0623 7.99733 41.7357 7.918 41.381 7.918C41.2037 7.918 40.9843 7.95067 40.723 8.016L36.761 9.22V11.306H43.047ZM47.8245 4.166C48.0952 4.166 48.3285 4.264 48.5245 4.46C48.7205 4.64667 48.8185 4.87533 48.8185 5.146C48.8185 5.41667 48.7205 5.65 48.5245 5.846C48.3285 6.042 48.0952 6.14 47.8245 6.14C47.5538 6.14 47.3205 6.042 47.1245 5.846C46.9285 5.65 46.8305 5.41667 46.8305 5.146C46.8305 4.87533 46.9285 4.64667 47.1245 4.46C47.3205 4.264 47.5538 4.166 47.8245 4.166ZM50.4005 4.166C50.6712 4.166 50.9045 4.264 51.1005 4.46C51.2965 4.64667 51.3945 4.87533 51.3945 5.146C51.3945 5.41667 51.2965 5.65 51.1005 5.846C50.9045 6.042 50.6712 6.14 50.4005 6.14C50.1298 6.14 49.8965 6.042 49.7005 5.846C49.5045 5.65 49.4065 5.41667 49.4065 5.146C49.4065 4.87533 49.5045 4.64667 49.7005 4.46C49.8965 4.264 50.1298 4.166 50.4005 4.166ZM51.7725 11.306C52.0058 11.306 52.2018 11.39 52.3605 11.558C52.5285 11.7167 52.6125 11.9127 52.6125 12.146C52.6125 12.3793 52.5285 12.58 52.3605 12.748C52.1925 12.916 51.9918 13 51.7585 13H51.0865C50.7412 13 50.4098 12.9347 50.0925 12.804C49.7845 12.664 49.5138 12.4773 49.2805 12.244C49.0565 12.4773 48.7952 12.664 48.4965 12.804C48.1978 12.9347 47.8852 13 47.5585 13H46.4105C46.1492 13 45.9345 12.9207 45.7665 12.762C45.5985 12.6033 45.5145 12.4027 45.5145 12.16C45.5145 11.9173 45.5985 11.7167 45.7665 11.558C45.9345 11.39 46.1492 11.306 46.4105 11.306H47.3625C47.6332 11.306 47.8618 11.2127 48.0485 11.026C48.2352 10.83 48.3285 10.6013 48.3285 10.34V7.568H50.0225V10.354C50.0598 10.6247 50.1812 10.8533 50.3865 11.04C50.5918 11.2173 50.8252 11.306 51.0865 11.306H51.7725ZM51.7142 13C51.4809 13 51.2802 12.9207 51.1122 12.762C50.9442 12.594 50.8602 12.3933 50.8602 12.16C50.8602 11.9173 50.9442 11.7167 51.1122 11.558C51.2709 11.39 51.4715 11.306 51.7142 11.306H52.4422C52.6102 11.306 52.7502 11.25 52.8622 11.138C52.9835 11.0167 53.0442 10.872 53.0442 10.704V3.228H54.7382V10.704C54.7382 11.1147 54.6355 11.4973 54.4302 11.852C54.2249 12.2067 53.9449 12.4867 53.5902 12.692C53.2449 12.8973 52.8669 13 52.4562 13H51.7142ZM57.1158 3.2H58.8098V13H57.1158V3.2Z" fill="#5B5B5B" />
    <g clip-path="url(#clip0_3_254)">
        <path d="M70.5125 1.5H77.1875C77.7425 1.5 78.2 1.95751 78.2 2.51251V3.62249C78.2 4.02749 77.945 4.53 77.6975 4.785L75.5225 6.705C75.2226 6.96 75.02 7.46249 75.02 7.8675V10.0425C75.02 10.3425 74.8175 10.7475 74.5625 10.905L73.8575 11.3625C73.1975 11.7675 72.29 11.31 72.29 10.5V7.8225C72.29 7.46999 72.0875 7.01251 71.885 6.75751L69.965 4.7325C69.71 4.4775 69.5075 4.02749 69.5075 3.71999V2.5575C69.5 1.9575 69.9575 1.5 70.5125 1.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M69.5 9V11.25C69.5 15 71 16.5 74.75 16.5H79.25C83 16.5 84.5 15 84.5 11.25V6.75C84.5 4.41 83.915 2.93999 82.5575 2.17499C82.175 1.95749 81.41 1.79249 80.7125 1.67999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M77.75 9.75H81.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M76.25 12.75H81.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_3_254">
            <rect width="18" height="18" fill="white" transform="translate(68)" />
        </clipPath>
    </defs>
</svg>
    ;
const LogoutIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.67505 5.66999C6.90755 2.96999 8.29503 1.86749 11.3325 1.86749H11.43C14.7825 1.86749 16.125 3.20999 16.125 6.56249V11.4525C16.125 14.805 14.7825 16.1475 11.43 16.1475H11.3325C8.31753 16.1475 6.93005 15.06 6.68255 12.405" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M1.5 9H11.16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.48755 6.48743L12 8.99993L9.48755 11.5124" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    ;

const navItems = [
    { label: "أداء الموقع", icon: PerformanceIcon, active: true },
    { label: "الإعلانات", icon: AdsIcon },
    { label: "الطلبات", icon: OrdersIcon },
    { label: "استقبال العروض", icon: OffersIcon },
    { label: "العملاء", icon: ClientsIcon },
    { label: "الملف الشخصي", icon: ProfileIcon },
    { label: "الفواتير", icon: InvoicesIcon },
    { label: "الاشتراكات", icon: SubsIcon },
    { label: "إعدادات القالب", icon: TemplateIcon },
    { label: "الإعدادات", icon: SettingsIcon },
    { label: "التصدير", icon: ExportIcon },
    { label: "تسجيل الخروج", icon: LogoutIcon },
];

const Nav = () => {
    return (
        <aside className=" bg-[#F8F8F8] flex flex-col items-center ">
            <nav className="flex flex-col  w-full  overflow-y-auto">
                {navItems.map((item, idx) => (
                    <button
                        key={idx}
                        className={`flex cursor-pointer gap-1.5 flex-row-reverse items-center justify-between w-full py-3 px-4 rounded-full transition-all ${item.active
                            ? "bg-white text-green-600 shadow-sm"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <span className="flex-1 text-right font-medium">{item.label}</span>
                        <span className="text-current">{item.icon}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default Nav;
