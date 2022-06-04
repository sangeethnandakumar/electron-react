import './App.css';
import AppMenu from '../src/commons/AppMenu'
import "@tabler/core/dist/js/tabler.min.js";
import "@tabler/core/dist/css/tabler.css";

function App() {
    return (
        <>
            <div className="row">
                {/*MENU BARS*/}
                <div className="col-md-12">

                    <AppMenu />
                    <div className="row" style={{margin:`5px`}}>
                        <div className="page-header d-print-none">
                            <div className="row g-2 align-items-center">
                                <div className="col">
                                    {/* Page pre-title */}
                                    <div className="page-pretitle">Overview</div>
                                    <h2 className="page-title">Dashboard</h2>
                                </div>
                                {/* Page title actions */}
                                <div className="col-12 col-md-auto ms-auto d-print-none">
                                    <div className="btn-list">
                                        <span className="d-none d-sm-inline">
                                            <a href="#" className="btn btn-white">
                                                New view
                                            </a>
                                        </span>
                                        <a
                                            href="#"
                                            className="btn btn-primary d-none d-sm-inline-block"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-report"
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <desc>
                                                    Download more icon variants from https://tabler-icons.io/i/plus
                                                </desc>
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1={12} y1={5} x2={12} y2={19} />
                                                <line x1={5} y1={12} x2={19} y2={12} />
                                            </svg>
                                            Create new report
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-primary d-sm-none btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-report"
                                            aria-label="Create new report"
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <desc>
                                                    Download more icon variants from https://tabler-icons.io/i/plus
                                                </desc>
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1={12} y1={5} x2={12} y2={19} />
                                                <line x1={5} y1={12} x2={19} y2={12} />
                                            </svg>
                                        </a>
                                    </div>
                                </div>



                                <div className="container-xl">
                                    <div className="row row-cards">
                                        <div className="col-12">
                                            <form action="https://httpbin.org/post" method="post" className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">Form elements</h4>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-xl-4">
                                                            <div className="row">
                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Static</label>
                                                                        <div className="form-control-plaintext">Input value</div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Text</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="example-text-input"
                                                                            placeholder="Input placeholder"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Password</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="example-password-input"
                                                                            placeholder="Input placeholder"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Disabled</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="example-disabled-input"
                                                                            placeholder="Disabled..."
                                                                            defaultValue="Well, she turned me into a newt."
                                                                            disabled=""
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Readonly</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="example-disabled-input"
                                                                            placeholder="Readonly..."
                                                                            defaultValue="Well, how'd you become king, then?"
                                                                            readOnly=""
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label required">Required</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="example-required-input"
                                                                            placeholder="Required..."
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Textarea{" "}
                                                                            <span className="form-label-description">56/100</span>
                                                                        </label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            name="example-textarea-input"
                                                                            rows={6}
                                                                            placeholder="Content.."
                                                                            defaultValue={
                                                                                "Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. Camelot!"
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Select</div>
                                                                        <select className="form-select">
                                                                            <option value={1}>One</option>
                                                                            <option value={2}>Two</option>
                                                                            <option value={3}>Three</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Select multiple</div>
                                                                        <select className="form-select" multiple="">
                                                                            <option value={1}>One</option>
                                                                            <option value={2}>Two</option>
                                                                            <option value={3}>Three</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Input group</label>
                                                                        <div className="input-group mb-2">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Search for…"
                                                                            />
                                                                            <button className="btn" type="button">
                                                                                Go!
                                                                            </button>
                                                                        </div>
                                                                        <div className="input-group">
                                                                            <button
                                                                                type="button"
                                                                                className="btn dropdown-toggle"
                                                                                data-bs-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                Action
                                                                            </button>
                                                                            <div className="dropdown-menu">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Action
                                                                                </a>
                                                                                <a className="dropdown-item" href="#">
                                                                                    Another action
                                                                                </a>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                aria-label="Text input with dropdown button"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Input group buttons</label>
                                                                        <div className="input-group">
                                                                            <input type="text" className="form-control" />
                                                                            <button type="button" className="btn">
                                                                                Action
                                                                            </button>
                                                                            <button
                                                                                data-bs-toggle="dropdown"
                                                                                type="button"
                                                                                className="btn dropdown-toggle dropdown-toggle-split"
                                                                            />
                                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                                <a className="dropdown-item" href="#">
                                                                                    Action
                                                                                </a>
                                                                                <a className="dropdown-item" href="#">
                                                                                    Another action
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Icon input</label>
                                                                        <div className="input-icon mb-3">
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                className="form-control"
                                                                                placeholder="Search…"
                                                                            />
                                                                            <span className="input-icon-addon">
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/search */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/search
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <circle cx={10} cy={10} r={7} />
                                                                                    <line x1={21} y1={21} x2={15} y2={15} />
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                        <div className="input-icon mb-3">
                                                                            <span className="input-icon-addon">
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/user */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/user
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <circle cx={12} cy={7} r={4} />
                                                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                                                </svg>
                                                                            </span>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                className="form-control"
                                                                                placeholder="Username"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Loader input</label>
                                                                        <div className="input-icon mb-3">
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                className="form-control"
                                                                                placeholder="Loading…"
                                                                            />
                                                                            <span className="input-icon-addon">
                                                                                <div
                                                                                    className="spinner-border spinner-border-sm text-muted"
                                                                                    role="status"
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <div className="input-icon mb-3">
                                                                            <span className="input-icon-addon">
                                                                                <div
                                                                                    className="spinner-border spinner-border-sm text-muted"
                                                                                    role="status"
                                                                                />
                                                                            </span>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                className="form-control"
                                                                                placeholder="Loading…"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Separated inputs</label>
                                                                        <div className="row g-2">
                                                                            <div className="col">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    placeholder="Search for…"
                                                                                />
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-white btn-icon"
                                                                                    aria-label="Button"
                                                                                >
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/search */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/search
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <circle cx={10} cy={10} r={7} />
                                                                                        <line x1={21} y1={21} x2={15} y2={15} />
                                                                                    </svg>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Input with help icon</label>
                                                                        <div className="row g-2">
                                                                            <div className="col">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    placeholder="Search for…"
                                                                                />
                                                                            </div>
                                                                            <div className="col-auto align-self-center">
                                                                                <span
                                                                                    className="form-help"
                                                                                    data-bs-toggle="popover"
                                                                                    data-bs-placement="top"
                                                                                    data-bs-content="<p>ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to determine address more accurately.</p>
                            <p class='mb-0'><a href='#'>USP ZIP codes lookup tools</a></p>
                            "
                                                                                    data-bs-html="true"
                                                                                    data-bs-original-title=""
                                                                                    title=""
                                                                                >
                                                                                    ?
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Form control rounded</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-rounded mb-2"
                                                                            name="Form control rounded"
                                                                            placeholder="Text.."
                                                                        />
                                                                        <div className="input-icon">
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                className="form-control form-control-rounded"
                                                                                placeholder="Search…"
                                                                            />
                                                                            <span className="input-icon-addon">
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/search */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/search
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <circle cx={10} cy={10} r={7} />
                                                                                    <line x1={21} y1={21} x2={15} y2={15} />
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Form control flush</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-flush"
                                                                            name="Form control flush"
                                                                            placeholder="Text.."
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Input group</label>
                                                                        <div className="input-group mb-2">
                                                                            <span className="input-group-text">@</span>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="username"
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                        <div className="input-group mb-2">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="subdomain"
                                                                                autoComplete="off"
                                                                            />
                                                                            <span className="input-group-text">.tabler.io</span>
                                                                        </div>
                                                                        <div className="input-group">
                                                                            <span className="input-group-text">https://</span>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="subdomain"
                                                                                autoComplete="off"
                                                                            />
                                                                            <span className="input-group-text">.tabler.io</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Input with checkbox or radios
                                                                        </label>
                                                                        <div className="input-group mb-2">
                                                                            <span className="input-group-text">
                                                                                <input
                                                                                    className="form-check-input m-0"
                                                                                    type="checkbox"
                                                                                    defaultChecked=""
                                                                                />
                                                                            </span>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                        <div className="input-group">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                autoComplete="off"
                                                                            />
                                                                            <span className="input-group-text">
                                                                                <input
                                                                                    className="form-check-input m-0"
                                                                                    type="radio"
                                                                                    defaultChecked=""
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Input with prepended text
                                                                        </label>
                                                                        <div className="input-group input-group-flat">
                                                                            <span className="input-group-text">
                                                                                https://tabler.io/users/
                                                                            </span>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control ps-0"
                                                                                defaultValue="yourfancyusername"
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Input with appended text
                                                                        </label>
                                                                        <div className="input-group input-group-flat">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control text-end pe-0"
                                                                                defaultValue="yourfancydomain"
                                                                                autoComplete="off"
                                                                            />
                                                                            <span className="input-group-text">.tabler.io</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Input with appended link
                                                                        </label>
                                                                        <div className="input-group input-group-flat">
                                                                            <input
                                                                                type="password"
                                                                                className="form-control"
                                                                                defaultValue="ultrastrongpassword"
                                                                                autoComplete="off"
                                                                            />
                                                                            <span className="input-group-text">
                                                                                <a href="#" className="input-group-link">
                                                                                    Show password
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Input with appended icon links
                                                                        </label>
                                                                        <div className="input-group input-group-flat">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                autoComplete="off"
                                                                            />
                                                                            <span className="input-group-text">
                                                                                <a
                                                                                    href="#"
                                                                                    className="link-secondary"
                                                                                    title=""
                                                                                    data-bs-toggle="tooltip"
                                                                                    data-bs-original-title="Clear search"
                                                                                >
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/x */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/x
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                                                    </svg>
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="link-secondary ms-2"
                                                                                    title=""
                                                                                    data-bs-toggle="tooltip"
                                                                                    data-bs-original-title="Search settings"
                                                                                >
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/adjustments */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/adjustments
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <circle cx={6} cy={10} r={2} />
                                                                                        <line x1={6} y1={4} x2={6} y2={8} />
                                                                                        <line x1={6} y1={12} x2={6} y2={20} />
                                                                                        <circle cx={12} cy={16} r={2} />
                                                                                        <line x1={12} y1={4} x2={12} y2={14} />
                                                                                        <line x1={12} y1={18} x2={12} y2={20} />
                                                                                        <circle cx={18} cy={7} r={2} />
                                                                                        <line x1={18} y1={4} x2={18} y2={5} />
                                                                                        <line x1={18} y1={9} x2={18} y2={20} />
                                                                                    </svg>
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="link-secondary ms-2 disabled"
                                                                                    title=""
                                                                                    data-bs-toggle="tooltip"
                                                                                    data-bs-original-title="Add notification"
                                                                                >
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/bell */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/bell
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                                                    </svg>
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Floating inputs</label>
                                                                        <div className="form-floating mb-3">
                                                                            <input
                                                                                type="email"
                                                                                className="form-control"
                                                                                id="floating-input"
                                                                                defaultValue="name@example.com"
                                                                                autoComplete="off"
                                                                            />
                                                                            <label htmlFor="floating-input">Email address</label>
                                                                        </div>
                                                                        <div className="form-floating mb-3">
                                                                            <input
                                                                                type="password"
                                                                                className="form-control"
                                                                                id="floating-password"
                                                                                defaultValue="Password"
                                                                                autoComplete="off"
                                                                            />
                                                                            <label htmlFor="floating-password">Password</label>
                                                                        </div>
                                                                        <div className="form-floating">
                                                                            <select
                                                                                className="form-select"
                                                                                id="floatingSelect"
                                                                                aria-label="Floating label select example"
                                                                            >
                                                                                <option selected="">Open this select menu</option>
                                                                                <option value={1}>One</option>
                                                                                <option value={2}>Two</option>
                                                                                <option value={3}>Three</option>
                                                                            </select>
                                                                            <label htmlFor="floatingSelect">Select</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4">
                                                            <div className="row">
                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Image Check</label>
                                                                        <div className="row g-2">
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={1}
                                                                                        className="form-imagecheck-input"
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/1b73704b282a8ec6.jpg"
                                                                                            alt="Breakfast served with tea, bread and eggs"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={2}
                                                                                        className="form-imagecheck-input"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/3d2998219313cd37.jpg"
                                                                                            alt="Book, fairy lights"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={3}
                                                                                        className="form-imagecheck-input"
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/6ab3200b14549f8a.jpg"
                                                                                            alt="Healthy Dinner"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={4}
                                                                                        className="form-imagecheck-input"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/6d35d9a2bd6c63c2.jpg"
                                                                                            alt="Aperol Spritz is a cocktail consisting of prosecco, aperitif and soda water"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={5}
                                                                                        className="form-imagecheck-input"
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/8a26974ee6444acd.jpg"
                                                                                            alt="Beautiful blonde woman on a wooden pier by the lake"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={6}
                                                                                        className="form-imagecheck-input"
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/8c13ad59f739558c.jpg"
                                                                                            alt="Still life of mandarin oranges with leaves"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={7}
                                                                                        className="form-imagecheck-input"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/8fdeb4785d2b82ef.jpg"
                                                                                            alt="Blonde woman having a healthy snack at the wooden pier"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={8}
                                                                                        className="form-imagecheck-input"
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/9f36332564ca271d.jpg"
                                                                                            alt="Woman working on a laptop while enjoying a breakfast coffee and chocolate in bed"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <label className="form-imagecheck mb-2">
                                                                                    <input
                                                                                        name="form-imagecheck"
                                                                                        type="checkbox"
                                                                                        defaultValue={9}
                                                                                        className="form-imagecheck-input"
                                                                                    />
                                                                                    <span className="form-imagecheck-figure">
                                                                                        <img
                                                                                            src="./static/photos/35b88fc04a518c1b.jpg"
                                                                                            alt="Overhead view of macarons on a marble slab"
                                                                                            className="form-imagecheck-image"
                                                                                        />
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Color Input</label>
                                                                        <div className="row g-2">
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="dark"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-dark" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput form-colorinput-light">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="white"
                                                                                        className="form-colorinput-input"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-white" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="blue"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-blue" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="azure"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-azure" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="indigo"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-indigo" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="purple"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-purple" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="pink"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-pink" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="red"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-red" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="orange"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-orange" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="yellow"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-yellow" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color"
                                                                                        type="radio"
                                                                                        defaultValue="lime"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-lime" />
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Color Input</label>
                                                                        <div className="row g-2">
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="dark"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-dark rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput form-colorinput-light">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="white"
                                                                                        className="form-colorinput-input"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-white rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="blue"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-blue rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="azure"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-azure rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="indigo"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-indigo rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="purple"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-purple rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="pink"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-pink rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="red"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-red rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="orange"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-orange rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="yellow"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-yellow rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-auto">
                                                                                <label className="form-colorinput">
                                                                                    <input
                                                                                        name="color-rounded"
                                                                                        type="radio"
                                                                                        defaultValue="lime"
                                                                                        className="form-colorinput-input"
                                                                                    />
                                                                                    <span className="form-colorinput-color bg-lime rounded-circle" />
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Color picker</label>
                                                                        <input
                                                                            type="color"
                                                                            className="form-control form-control-color"
                                                                            defaultValue="#206bc4"
                                                                            title="Choose your color"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Validation States </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control is-valid mb-2"
                                                                            placeholder="Valid State.."
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            className="form-control is-invalid"
                                                                            placeholder="Invalid State.."
                                                                        />
                                                                        <div className="invalid-feedback">Invalid feedback</div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Validation States (lite)
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control is-valid is-valid-lite mb-2"
                                                                            placeholder="Valid State.."
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            className="form-control is-invalid is-invalid-lite"
                                                                            placeholder="Invalid State.."
                                                                        />
                                                                    </div>
                                                                    <label className="form-label">Form fieldset</label>
                                                                    <fieldset className="form-fieldset">
                                                                        <div className="mb-3">
                                                                            <label className="form-label required">Full name</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label required">Company</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label required">Email</label>
                                                                            <input
                                                                                type="email"
                                                                                className="form-control"
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Phone number</label>
                                                                            <input
                                                                                type="tel"
                                                                                className="form-control"
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                        <label className="form-check">
                                                                            <input type="checkbox" className="form-check-input" />
                                                                            <span className="form-check-label required">
                                                                                I agree to the Terms &amp; Conditions
                                                                            </span>
                                                                        </label>
                                                                    </fieldset>
                                                                </div>
                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Simple selectgroup</label>
                                                                        <div className="form-selectgroup">
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="HTML"
                                                                                    className="form-selectgroup-input"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-selectgroup-label">HTML</span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="CSS"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">CSS</span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="PHP"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">PHP</span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="JavaScript"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    JavaScript
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Icon input</label>
                                                                        <div className="form-selectgroup">
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="sun"
                                                                                    className="form-selectgroup-input"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/sun */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/sun
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <circle cx={12} cy={12} r={4} />
                                                                                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="moon"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/moon */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/moon
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="cloud-rain"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/cloud-rain */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/cloud-rain
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
                                                                                        <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="cloud"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/cloud */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/cloud
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 .996c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="Other"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">Other</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Selectgroup with icons and text
                                                                        </label>
                                                                        <div className="form-selectgroup">
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="icons"
                                                                                    defaultValue="home"
                                                                                    className="form-selectgroup-input"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/home */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon me-1"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/home
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                                                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                                                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                                                                    </svg>
                                                                                    Home
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="icons"
                                                                                    defaultValue="user"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/user */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon me-1"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/user
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <circle cx={12} cy={7} r={4} />
                                                                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                                                    </svg>
                                                                                    User
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="icons"
                                                                                    defaultValue="circle"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/circle */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon me-1"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/circle
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <circle cx={12} cy={12} r={9} />
                                                                                    </svg>
                                                                                    Circle
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="icons"
                                                                                    defaultValue="square"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/square */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon me-1"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/square
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <rect x={4} y={4} width={16} height={16} rx={2} />
                                                                                    </svg>
                                                                                    Square
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Different style</label>
                                                                        <div className="form-selectgroup form-selectgroup-pills">
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="HTML"
                                                                                    className="form-selectgroup-input"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-selectgroup-label">HTML</span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="CSS"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">CSS</span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="PHP"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">PHP</span>
                                                                            </label>
                                                                            <label className="form-selectgroup-item">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="name"
                                                                                    defaultValue="JavaScript"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <span className="form-selectgroup-label">
                                                                                    JavaScript
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Payment method</label>
                                                                        <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="form-payment"
                                                                                    defaultValue="visa"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="payment payment-provider-visa payment-xs me-2" />
                                                                                        ending in <strong>7998</strong>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="form-payment"
                                                                                    defaultValue="mastercard"
                                                                                    className="form-selectgroup-input"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="payment payment-provider-mastercard payment-xs me-2" />
                                                                                        ending in <strong>2807</strong>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="form-payment"
                                                                                    defaultValue="paypal"
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="payment payment-provider-paypal payment-xs me-2" />
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Project Manager</label>
                                                                        <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="form-project-manager[]"
                                                                                    defaultValue={1}
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div className="form-selectgroup-label-content d-flex align-items-center">
                                                                                        <span
                                                                                            className="avatar me-3"
                                                                                            style={{
                                                                                                backgroundImage:
                                                                                                    "url(./static/avatars/000m.jpg)"
                                                                                            }}
                                                                                        />
                                                                                        <div>
                                                                                            <div className="font-weight-medium">
                                                                                                Paweł Kuna
                                                                                            </div>
                                                                                            <div className="text-muted">UI Designer</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="form-project-manager[]"
                                                                                    defaultValue={2}
                                                                                    className="form-selectgroup-input"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div className="form-selectgroup-label-content d-flex align-items-center">
                                                                                        <span className="avatar me-3">JL</span>
                                                                                        <div>
                                                                                            <div className="font-weight-medium">
                                                                                                Jeffie Lewzey
                                                                                            </div>
                                                                                            <div className="text-muted">
                                                                                                Chemical Engineer
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="form-project-manager[]"
                                                                                    defaultValue={3}
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div className="form-selectgroup-label-content d-flex align-items-center">
                                                                                        <span
                                                                                            className="avatar me-3"
                                                                                            style={{
                                                                                                backgroundImage:
                                                                                                    "url(./static/avatars/002m.jpg)"
                                                                                            }}
                                                                                        />
                                                                                        <div>
                                                                                            <div className="font-weight-medium">
                                                                                                Mallory Hulme
                                                                                            </div>
                                                                                            <div className="text-muted">Geologist IV</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="form-project-manager[]"
                                                                                    defaultValue={4}
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div className="form-selectgroup-label-content d-flex align-items-center">
                                                                                        <span
                                                                                            className="avatar me-3"
                                                                                            style={{
                                                                                                backgroundImage:
                                                                                                    "url(./static/avatars/003m.jpg)"
                                                                                            }}
                                                                                        />
                                                                                        <div>
                                                                                            <div className="font-weight-medium">
                                                                                                Dunn Slane
                                                                                            </div>
                                                                                            <div className="text-muted">Research Nurse</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <label className="form-selectgroup-item flex-fill">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="form-project-manager[]"
                                                                                    defaultValue={5}
                                                                                    className="form-selectgroup-input"
                                                                                />
                                                                                <div className="form-selectgroup-label d-flex align-items-center p-3">
                                                                                    <div className="me-3">
                                                                                        <span className="form-selectgroup-check" />
                                                                                    </div>
                                                                                    <div className="form-selectgroup-label-content d-flex align-items-center">
                                                                                        <span
                                                                                            className="avatar me-3"
                                                                                            style={{
                                                                                                backgroundImage:
                                                                                                    "url(./static/avatars/000f.jpg)"
                                                                                            }}
                                                                                        />
                                                                                        <div>
                                                                                            <div className="font-weight-medium">
                                                                                                Emmy Levet
                                                                                            </div>
                                                                                            <div className="text-muted">
                                                                                                VP Product Management
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Buttons group</label>
                                                                        <div className="btn-group w-100">
                                                                            <button type="button" className="btn">
                                                                                1 min
                                                                            </button>
                                                                            <button type="button" className="btn btn-primary">
                                                                                5 min
                                                                            </button>
                                                                            <button type="button" className="btn">
                                                                                10 min
                                                                            </button>
                                                                            <button type="button" className="btn">
                                                                                30 min
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Buttons group with dropdown
                                                                        </label>
                                                                        <div className="btn-group w-100">
                                                                            <button type="button" className="btn">
                                                                                Option 1
                                                                            </button>
                                                                            <button type="button" className="btn btn-primary">
                                                                                Option 2
                                                                            </button>
                                                                            <div className="btn-group" role="group">
                                                                                <button
                                                                                    id="btnGroupDrop1"
                                                                                    type="button"
                                                                                    className="btn dropdown-toggle"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    Other
                                                                                </button>
                                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                                    <a className="dropdown-item" href="#">
                                                                                        Option 4
                                                                                    </a>
                                                                                    <a className="dropdown-item" href="#">
                                                                                        Option 5
                                                                                    </a>
                                                                                    <a className="dropdown-item" href="#">
                                                                                        Option 6
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Toolbar</label>
                                                                        <div className="btn-group w-100">
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-white btn-icon"
                                                                                aria-label="Button"
                                                                            >
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/bold */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/bold
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
                                                                                    <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
                                                                                </svg>
                                                                            </a>
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-white btn-icon"
                                                                                aria-label="Button"
                                                                            >
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/italic */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/italic
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <line x1={11} y1={5} x2={17} y2={5} />
                                                                                    <line x1={7} y1={19} x2={13} y2={19} />
                                                                                    <line x1={14} y1={5} x2={10} y2={19} />
                                                                                </svg>
                                                                            </a>
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-white btn-icon"
                                                                                aria-label="Button"
                                                                            >
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/underline */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/underline
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <path d="M7 5v5a5 5 0 0 0 10 0v-5" />
                                                                                    <path d="M5 19h14" />
                                                                                </svg>
                                                                            </a>
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-white btn-icon"
                                                                                aria-label="Button"
                                                                            >
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/copy */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/copy
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <rect x={8} y={8} width={12} height={12} rx={2} />
                                                                                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                                                                                </svg>
                                                                            </a>
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-white btn-icon"
                                                                                aria-label="Button"
                                                                            >
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/scissors */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/scissors
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <circle cx={6} cy={7} r={3} />
                                                                                    <circle cx={6} cy={17} r={3} />
                                                                                    <line x1="8.6" y1="8.6" x2={19} y2={19} />
                                                                                    <line x1="8.6" y1="15.4" x2={19} y2={5} />
                                                                                </svg>
                                                                            </a>
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-white btn-icon"
                                                                                aria-label="Button"
                                                                            >
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/file-plus */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/file-plus
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                                                                    <line x1={12} y1={11} x2={12} y2={17} />
                                                                                    <line x1={9} y1={14} x2={15} y2={14} />
                                                                                </svg>
                                                                            </a>
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-white btn-icon"
                                                                                aria-label="Button"
                                                                            >
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/file-minus */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/file-minus
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                                                                    <line x1={9} y1={14} x2={15} y2={14} />
                                                                                </svg>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4">
                                                            <div className="row">
                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Radios</div>
                                                                        <div>
                                                                            <label className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-check-label">Option 1</span>
                                                                            </label>
                                                                            <label className="form-check">
                                                                                <input className="form-check-input" type="radio" />
                                                                                <span className="form-check-label">Option 2</span>
                                                                            </label>
                                                                            <label className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    disabled=""
                                                                                />
                                                                                <span className="form-check-label">Option 3</span>
                                                                            </label>
                                                                            <label className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    defaultChecked=""
                                                                                    disabled=""
                                                                                />
                                                                                <span className="form-check-label">Option 4</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Inline Radios</div>
                                                                        <div>
                                                                            <label className="form-check form-check-inline">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-check-label">Option 1</span>
                                                                            </label>
                                                                            <label className="form-check form-check-inline">
                                                                                <input className="form-check-input" type="radio" />
                                                                                <span className="form-check-label">Option 2</span>
                                                                            </label>
                                                                            <label className="form-check form-check-inline">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    disabled=""
                                                                                />
                                                                                <span className="form-check-label">Option 3</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Checkboxes</div>
                                                                        <div>
                                                                            <label className="form-check">
                                                                                <input className="form-check-input" type="checkbox" />
                                                                                <span className="form-check-label">Checkbox input</span>
                                                                            </label>
                                                                            <label className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    disabled=""
                                                                                />
                                                                                <span className="form-check-label">
                                                                                    Disabled checkbox input
                                                                                </span>
                                                                            </label>
                                                                            <label className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-check-label">
                                                                                    Checked checkbox input
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Inline Checkboxes</div>
                                                                        <div>
                                                                            <label className="form-check form-check-inline">
                                                                                <input className="form-check-input" type="checkbox" />
                                                                                <span className="form-check-label">Option 1</span>
                                                                            </label>
                                                                            <label className="form-check form-check-inline">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    disabled=""
                                                                                />
                                                                                <span className="form-check-label">Option 2</span>
                                                                            </label>
                                                                            <label className="form-check form-check-inline">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <span className="form-check-label">Option 3</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Checkboxes with description
                                                                        </label>
                                                                        <label className="form-check mb-2">
                                                                            <input className="form-check-input" type="checkbox" />
                                                                            <span className="form-check-label">Default checkbox</span>
                                                                            <span className="form-check-description">
                                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                                elit.
                                                                            </span>
                                                                        </label>
                                                                        <label className="form-check mb-2">
                                                                            <input className="form-check-input" type="checkbox" />
                                                                            <span className="form-check-label">
                                                                                Longer checkbox item that wraps on to two separate lines
                                                                            </span>
                                                                            <span className="form-check-description">
                                                                                Ab alias aut, consequuntur cumque esse eveniet incidunt
                                                                                laborum minus molestiae.
                                                                            </span>
                                                                        </label>
                                                                        <label className="form-check">
                                                                            <input className="form-check-input" type="checkbox" />
                                                                            <span className="form-check-label">
                                                                                Default checkbox without description
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Toggle switches</div>
                                                                        <label className="form-check form-switch">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultChecked=""
                                                                            />
                                                                            <span className="form-check-label">Option 1</span>
                                                                        </label>
                                                                        <label className="form-check form-switch">
                                                                            <input className="form-check-input" type="checkbox" />
                                                                            <span className="form-check-label">Option 2</span>
                                                                        </label>
                                                                        <label className="form-check form-switch">
                                                                            <input className="form-check-input" type="checkbox" />
                                                                            <span className="form-check-label">Option 3</span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Single switch</div>
                                                                        <label className="form-check form-switch">
                                                                            <input className="form-check-input" type="checkbox" />
                                                                            <span className="form-check-label">
                                                                                I agree with terms and conditions
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Notification</label>
                                                                        <div className="divide-y">
                                                                            <div>
                                                                                <label className="row">
                                                                                    <span className="col">Push Notifications</span>
                                                                                    <span className="col-auto">
                                                                                        <label className="form-check form-check-single form-switch">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultChecked=""
                                                                                            />
                                                                                        </label>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div>
                                                                                <label className="row">
                                                                                    <span className="col">SMS Notifications</span>
                                                                                    <span className="col-auto">
                                                                                        <label className="form-check form-check-single form-switch">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                            />
                                                                                        </label>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div>
                                                                                <label className="row">
                                                                                    <span className="col">Email Notifications</span>
                                                                                    <span className="col-auto">
                                                                                        <label className="form-check form-check-single form-switch">
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                defaultChecked=""
                                                                                            />
                                                                                        </label>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-label">Custom File Input</div>
                                                                        <input type="file" className="form-control" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Date of birth</label>
                                                                        <div className="row g-2">
                                                                            <div className="col-5">
                                                                                <select name="user[month]" className="form-select">
                                                                                    <option value="">Month</option>
                                                                                    <option value={1}>January</option>
                                                                                    <option value={2}>February</option>
                                                                                    <option value={3}>March</option>
                                                                                    <option value={4}>April</option>
                                                                                    <option value={5}>May</option>
                                                                                    <option selected="selected" value={6}>
                                                                                        June
                                                                                    </option>
                                                                                    <option value={7}>July</option>
                                                                                    <option value={8}>August</option>
                                                                                    <option value={9}>September</option>
                                                                                    <option value={10}>October</option>
                                                                                    <option value={11}>November</option>
                                                                                    <option value={12}>December</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-3">
                                                                                <select name="user[day]" className="form-select">
                                                                                    <option value="">Day</option>
                                                                                    <option value={1}>1</option>
                                                                                    <option value={2}>2</option>
                                                                                    <option value={3}>3</option>
                                                                                    <option value={4}>4</option>
                                                                                    <option value={5}>5</option>
                                                                                    <option value={6}>6</option>
                                                                                    <option value={7}>7</option>
                                                                                    <option value={8}>8</option>
                                                                                    <option value={9}>9</option>
                                                                                    <option value={10}>10</option>
                                                                                    <option value={11}>11</option>
                                                                                    <option value={12}>12</option>
                                                                                    <option value={13}>13</option>
                                                                                    <option value={14}>14</option>
                                                                                    <option value={15}>15</option>
                                                                                    <option value={16}>16</option>
                                                                                    <option value={17}>17</option>
                                                                                    <option value={18}>18</option>
                                                                                    <option value={19}>19</option>
                                                                                    <option value={20} selected="">
                                                                                        20
                                                                                    </option>
                                                                                    <option value={21}>21</option>
                                                                                    <option value={22}>22</option>
                                                                                    <option value={23}>23</option>
                                                                                    <option value={24}>24</option>
                                                                                    <option value={25}>25</option>
                                                                                    <option value={26}>26</option>
                                                                                    <option value={27}>27</option>
                                                                                    <option value={28}>28</option>
                                                                                    <option value={29}>29</option>
                                                                                    <option value={30}>30</option>
                                                                                    <option value={31}>31</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-4">
                                                                                <select name="user[year]" className="form-select">
                                                                                    <option value="">Year</option>
                                                                                    <option value={2014}>2014</option>
                                                                                    <option value={2013}>2013</option>
                                                                                    <option value={2012}>2012</option>
                                                                                    <option value={2011}>2011</option>
                                                                                    <option value={2010}>2010</option>
                                                                                    <option value={2009}>2009</option>
                                                                                    <option value={2008}>2008</option>
                                                                                    <option value={2007}>2007</option>
                                                                                    <option value={2006}>2006</option>
                                                                                    <option value={2005}>2005</option>
                                                                                    <option value={2004}>2004</option>
                                                                                    <option value={2003}>2003</option>
                                                                                    <option value={2002}>2002</option>
                                                                                    <option value={2001}>2001</option>
                                                                                    <option value={2000}>2000</option>
                                                                                    <option value={1999}>1999</option>
                                                                                    <option value={1998}>1998</option>
                                                                                    <option value={1997}>1997</option>
                                                                                    <option value={1996}>1996</option>
                                                                                    <option value={1995}>1995</option>
                                                                                    <option value={1994}>1994</option>
                                                                                    <option value={1993}>1993</option>
                                                                                    <option value={1992}>1992</option>
                                                                                    <option value={1991}>1991</option>
                                                                                    <option value={1990}>1990</option>
                                                                                    <option value={1989} selected="">
                                                                                        1989
                                                                                    </option>
                                                                                    <option value={1988}>1988</option>
                                                                                    <option value={1987}>1987</option>
                                                                                    <option value={1986}>1986</option>
                                                                                    <option value={1985}>1985</option>
                                                                                    <option value={1984}>1984</option>
                                                                                    <option value={1983}>1983</option>
                                                                                    <option value={1982}>1982</option>
                                                                                    <option value={1981}>1981</option>
                                                                                    <option value={1980}>1980</option>
                                                                                    <option value={1979}>1979</option>
                                                                                    <option value={1978}>1978</option>
                                                                                    <option value={1977}>1977</option>
                                                                                    <option value={1976}>1976</option>
                                                                                    <option value={1975}>1975</option>
                                                                                    <option value={1974}>1974</option>
                                                                                    <option value={1973}>1973</option>
                                                                                    <option value={1972}>1972</option>
                                                                                    <option value={1971}>1971</option>
                                                                                    <option value={1970}>1970</option>
                                                                                    <option value={1969}>1969</option>
                                                                                    <option value={1968}>1968</option>
                                                                                    <option value={1967}>1967</option>
                                                                                    <option value={1966}>1966</option>
                                                                                    <option value={1965}>1965</option>
                                                                                    <option value={1964}>1964</option>
                                                                                    <option value={1963}>1963</option>
                                                                                    <option value={1962}>1962</option>
                                                                                    <option value={1961}>1961</option>
                                                                                    <option value={1960}>1960</option>
                                                                                    <option value={1959}>1959</option>
                                                                                    <option value={1958}>1958</option>
                                                                                    <option value={1957}>1957</option>
                                                                                    <option value={1956}>1956</option>
                                                                                    <option value={1955}>1955</option>
                                                                                    <option value={1954}>1954</option>
                                                                                    <option value={1953}>1953</option>
                                                                                    <option value={1952}>1952</option>
                                                                                    <option value={1951}>1951</option>
                                                                                    <option value={1950}>1950</option>
                                                                                    <option value={1949}>1949</option>
                                                                                    <option value={1948}>1948</option>
                                                                                    <option value={1947}>1947</option>
                                                                                    <option value={1946}>1946</option>
                                                                                    <option value={1945}>1945</option>
                                                                                    <option value={1944}>1944</option>
                                                                                    <option value={1943}>1943</option>
                                                                                    <option value={1942}>1942</option>
                                                                                    <option value={1941}>1941</option>
                                                                                    <option value={1940}>1940</option>
                                                                                    <option value={1939}>1939</option>
                                                                                    <option value={1938}>1938</option>
                                                                                    <option value={1937}>1937</option>
                                                                                    <option value={1936}>1936</option>
                                                                                    <option value={1935}>1935</option>
                                                                                    <option value={1934}>1934</option>
                                                                                    <option value={1933}>1933</option>
                                                                                    <option value={1932}>1932</option>
                                                                                    <option value={1931}>1931</option>
                                                                                    <option value={1930}>1930</option>
                                                                                    <option value={1929}>1929</option>
                                                                                    <option value={1928}>1928</option>
                                                                                    <option value={1927}>1927</option>
                                                                                    <option value={1926}>1926</option>
                                                                                    <option value={1925}>1925</option>
                                                                                    <option value={1924}>1924</option>
                                                                                    <option value={1923}>1923</option>
                                                                                    <option value={1922}>1922</option>
                                                                                    <option value={1921}>1921</option>
                                                                                    <option value={1920}>1920</option>
                                                                                    <option value={1919}>1919</option>
                                                                                    <option value={1918}>1918</option>
                                                                                    <option value={1917}>1917</option>
                                                                                    <option value={1916}>1916</option>
                                                                                    <option value={1915}>1915</option>
                                                                                    <option value={1914}>1914</option>
                                                                                    <option value={1913}>1913</option>
                                                                                    <option value={1912}>1912</option>
                                                                                    <option value={1911}>1911</option>
                                                                                    <option value={1910}>1910</option>
                                                                                    <option value={1909}>1909</option>
                                                                                    <option value={1908}>1908</option>
                                                                                    <option value={1907}>1907</option>
                                                                                    <option value={1906}>1906</option>
                                                                                    <option value={1905}>1905</option>
                                                                                    <option value={1904}>1904</option>
                                                                                    <option value={1903}>1903</option>
                                                                                    <option value={1902}>1902</option>
                                                                                    <option value={1901}>1901</option>
                                                                                    <option value={1900}>1900</option>
                                                                                    <option value={1899}>1899</option>
                                                                                    <option value={1898}>1898</option>
                                                                                    <option value={1897}>1897</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Text mask</label>
                                                                        <input
                                                                            type="text"
                                                                            name="input-mask"
                                                                            className="form-control"
                                                                            data-mask="00/00/0000"
                                                                            data-mask-visible="true"
                                                                            placeholder="00/00/0000"
                                                                            autoComplete="off"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Telephone mask</label>
                                                                        <input
                                                                            type="text"
                                                                            name="input-mask"
                                                                            className="form-control"
                                                                            data-mask="(00) 0000-0000"
                                                                            data-mask-visible="true"
                                                                            placeholder="(00) 0000-0000"
                                                                            autoComplete="off"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Autosize textarea</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            data-bs-toggle="autosize"
                                                                            placeholder="Type something…"
                                                                            style={{
                                                                                overflow: "hidden",
                                                                                overflowWrap: "break-word",
                                                                                resize: "none",
                                                                                height: 56
                                                                            }}
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-xl-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Datalist example</label>
                                                                        <input
                                                                            className="form-control"
                                                                            list="datalistOptions"
                                                                            placeholder="Type to search..."
                                                                        />
                                                                        <datalist id="datalistOptions">
                                                                            <option value="Aruba"></option>
                                                                            <option value="Afghanistan"></option>
                                                                            <option value="Angola"></option>
                                                                            <option value="Anguilla"></option>
                                                                            <option value="Albania"></option>
                                                                            <option value="Andorra"></option>
                                                                            <option value="United Arab Emirates"></option>
                                                                            <option value="Argentina"></option>
                                                                            <option value="Armenia"></option>
                                                                            <option value="American Samoa"></option>
                                                                        </datalist>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Range input</label>
                                                                        <input
                                                                            type="range"
                                                                            className="form-range mb-2"
                                                                            defaultValue={40}
                                                                            min={0}
                                                                            max={100}
                                                                            step={10}
                                                                        />
                                                                        <div
                                                                            className="form-range mb-2 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                                                                            id="range-simple"
                                                                        >
                                                                            <div className="noUi-base">
                                                                                <div className="noUi-connects">
                                                                                    <div
                                                                                        className="noUi-connect"
                                                                                        style={{
                                                                                            transform: "translate(0%, 0px) scale(0.2, 1)"
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    className="noUi-origin"
                                                                                    style={{
                                                                                        transform: "translate(-80%, 0px)",
                                                                                        zIndex: 4
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        className="noUi-handle noUi-handle-lower"
                                                                                        data-handle={0}
                                                                                        tabIndex={0}
                                                                                        role="slider"
                                                                                        aria-orientation="horizontal"
                                                                                        aria-valuemin={0.0}
                                                                                        aria-valuemax={100.0}
                                                                                        aria-valuenow={20.0}
                                                                                        aria-valuetext={20.0}
                                                                                    >
                                                                                        <div className="noUi-touch-area" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="form-range mb-2 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                                                                            id="range-connect"
                                                                        >
                                                                            <div className="noUi-base">
                                                                                <div className="noUi-connects">
                                                                                    <div
                                                                                        className="noUi-connect"
                                                                                        style={{
                                                                                            transform: "translate(60%, 0px) scale(0.3, 1)"
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    className="noUi-origin"
                                                                                    style={{
                                                                                        transform: "translate(-40%, 0px)",
                                                                                        zIndex: 5
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        className="noUi-handle noUi-handle-lower"
                                                                                        data-handle={0}
                                                                                        tabIndex={0}
                                                                                        role="slider"
                                                                                        aria-orientation="horizontal"
                                                                                        aria-valuemin={0.0}
                                                                                        aria-valuemax={90.0}
                                                                                        aria-valuenow={60.0}
                                                                                        aria-valuetext={60.0}
                                                                                    >
                                                                                        <div className="noUi-touch-area" />
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="noUi-origin"
                                                                                    style={{
                                                                                        transform: "translate(-10%, 0px)",
                                                                                        zIndex: 4
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        className="noUi-handle noUi-handle-upper"
                                                                                        data-handle={1}
                                                                                        tabIndex={0}
                                                                                        role="slider"
                                                                                        aria-orientation="horizontal"
                                                                                        aria-valuemin={60.0}
                                                                                        aria-valuemax={100.0}
                                                                                        aria-valuenow={90.0}
                                                                                        aria-valuetext={90.0}
                                                                                    >
                                                                                        <div className="noUi-touch-area" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="form-range mb-2 text-green noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                                                                            id="range-color"
                                                                        >
                                                                            <div className="noUi-base">
                                                                                <div className="noUi-connects">
                                                                                    <div
                                                                                        className="noUi-connect"
                                                                                        style={{
                                                                                            transform: "translate(0%, 0px) scale(0.4, 1)"
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    className="noUi-origin"
                                                                                    style={{
                                                                                        transform: "translate(-60%, 0px)",
                                                                                        zIndex: 4
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        className="noUi-handle noUi-handle-lower"
                                                                                        data-handle={0}
                                                                                        tabIndex={0}
                                                                                        role="slider"
                                                                                        aria-orientation="horizontal"
                                                                                        aria-valuemin={0.0}
                                                                                        aria-valuemax={100.0}
                                                                                        aria-valuenow={40.0}
                                                                                        aria-valuetext={40.0}
                                                                                    >
                                                                                        <div className="noUi-touch-area" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Datepicker</label>
                                                                        <input
                                                                            className="form-control mb-2"
                                                                            placeholder="Select a date"
                                                                            id="datepicker-default"
                                                                            defaultValue="2020-06-20"
                                                                        />
                                                                        <div className="input-icon mb-2">
                                                                            <input
                                                                                className="form-control "
                                                                                placeholder="Select a date"
                                                                                id="datepicker-icon"
                                                                                defaultValue="2020-06-20"
                                                                            />
                                                                            <span className="input-icon-addon">
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/calendar
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <rect x={4} y={5} width={16} height={16} rx={2} />
                                                                                    <line x1={16} y1={3} x2={16} y2={7} />
                                                                                    <line x1={8} y1={3} x2={8} y2={7} />
                                                                                    <line x1={4} y1={11} x2={20} y2={11} />
                                                                                    <line x1={11} y1={15} x2={12} y2={15} />
                                                                                    <line x1={12} y1={15} x2={12} y2={18} />
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                        <div className="input-icon">
                                                                            <span className="input-icon-addon">
                                                                                {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="icon"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    fill="none"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <desc>
                                                                                        Download more icon variants from
                                                                                        https://tabler-icons.io/i/calendar
                                                                                    </desc>
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                    <rect x={4} y={5} width={16} height={16} rx={2} />
                                                                                    <line x1={16} y1={3} x2={16} y2={7} />
                                                                                    <line x1={8} y1={3} x2={8} y2={7} />
                                                                                    <line x1={4} y1={11} x2={20} y2={11} />
                                                                                    <line x1={11} y1={15} x2={12} y2={15} />
                                                                                    <line x1={12} y1={15} x2={12} y2={18} />
                                                                                </svg>
                                                                            </span>
                                                                            <input
                                                                                className="form-control"
                                                                                placeholder="Select a date"
                                                                                id="datepicker-icon-prepend"
                                                                                defaultValue="2020-06-20"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Inline datepicker</label>
                                                                        <div className="datepicker-inline" id="datepicker-inline">
                                                                            <div
                                                                                className="litepicker"
                                                                                data-plugins=""
                                                                                style={{
                                                                                    display: "inline-block",
                                                                                    position: "relative"
                                                                                }}
                                                                            >
                                                                                <div className="container__main">
                                                                                    <div className="container__months">
                                                                                        <div className="month-item">
                                                                                            <div className="month-item-header">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="button-previous-month"
                                                                                                >
                                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
                                                                                                    <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        className="icon"
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        viewBox="0 0 24 24"
                                                                                                        strokeWidth={2}
                                                                                                        stroke="currentColor"
                                                                                                        fill="none"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    >
                                                                                                        <desc>
                                                                                                            Download more icon variants from
                                                                                                            https://tabler-icons.io/i/chevron-left
                                                                                                        </desc>
                                                                                                        <path
                                                                                                            stroke="none"
                                                                                                            d="M0 0h24v24H0z"
                                                                                                            fill="none"
                                                                                                        />
                                                                                                        <polyline points="15 6 9 12 15 18" />
                                                                                                    </svg>
                                                                                                </button>
                                                                                                <div>
                                                                                                    <strong className="month-item-name">
                                                                                                        June
                                                                                                    </strong>
                                                                                                    <span className="month-item-year">2022</span>
                                                                                                </div>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="button-next-month"
                                                                                                >
                                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
                                                                                                    <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        className="icon"
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        viewBox="0 0 24 24"
                                                                                                        strokeWidth={2}
                                                                                                        stroke="currentColor"
                                                                                                        fill="none"
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    >
                                                                                                        <desc>
                                                                                                            Download more icon variants from
                                                                                                            https://tabler-icons.io/i/chevron-right
                                                                                                        </desc>
                                                                                                        <path
                                                                                                            stroke="none"
                                                                                                            d="M0 0h24v24H0z"
                                                                                                            fill="none"
                                                                                                        />
                                                                                                        <polyline points="9 6 15 12 9 18" />
                                                                                                    </svg>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="month-item-weekdays-row">
                                                                                                <div title="Monday">Mon</div>
                                                                                                <div title="Tuesday">Tue</div>
                                                                                                <div title="Wednesday">Wed</div>
                                                                                                <div title="Thursday">Thu</div>
                                                                                                <div title="Friday">Fri</div>
                                                                                                <div title="Saturday">Sat</div>
                                                                                                <div title="Sunday">Sun</div>
                                                                                            </div>
                                                                                            <div className="container__days">
                                                                                                <div />
                                                                                                <div />
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654021800000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    1
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654108200000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    2
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654194600000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    3
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654281000000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    4
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item is-today"
                                                                                                    data-time={1654367400000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    5
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654453800000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    6
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654540200000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    7
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654626600000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    8
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654713000000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    9
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654799400000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    10
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654885800000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    11
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1654972200000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    12
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655058600000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    13
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655145000000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    14
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655231400000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    15
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655317800000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    16
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655404200000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    17
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655490600000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    18
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655577000000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    19
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655663400000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    20
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655749800000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    21
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655836200000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    22
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1655922600000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    23
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1656009000000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    24
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1656095400000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    25
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1656181800000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    26
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1656268200000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    27
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1656354600000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    28
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1656441000000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    29
                                                                                                </div>
                                                                                                <div
                                                                                                    className="day-item"
                                                                                                    data-time={1656527400000}
                                                                                                    tabIndex={0}
                                                                                                >
                                                                                                    30
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="container__tooltip" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Progress</label>
                                                                        <div className="progress mb-2">
                                                                            <div
                                                                                className="progress-bar"
                                                                                style={{ width: "38%" }}
                                                                                role="progressbar"
                                                                                aria-valuenow={38}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                                aria-label="38% Complete"
                                                                            >
                                                                                <span className="visually-hidden">38% Complete</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-indeterminate bg-green" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Form buttons</label>
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <a href="#" className="btn btn-white w-100">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon text-github"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/brand-github
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                                                                    </svg>
                                                                                    Login with Github
                                                                                </a>
                                                                            </div>
                                                                            <div className="col">
                                                                                <a href="#" className="btn btn-white w-100">
                                                                                    {/* Download SVG icon from http://tabler-icons.io/i/brand-twitter */}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="icon text-twitter"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        fill="none"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    >
                                                                                        <desc>
                                                                                            Download more icon variants from
                                                                                            https://tabler-icons.io/i/brand-twitter
                                                                                        </desc>
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                                                                    </svg>
                                                                                    Login with Twitter
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Tags input</label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select tomselected ts-hidden-accessible"
                                                                            placeholder="Select a date"
                                                                            id="select-tags"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option value="JavaScript">JavaScript</option>
                                                                            <option value="CSS">CSS</option>
                                                                            <option value="jQuery">jQuery</option>
                                                                            <option value="Bootstrap">Bootstrap</option>
                                                                            <option value="Ruby">Ruby</option>
                                                                            <option value="Python">Python</option>
                                                                            <option value="HTML">HTML</option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value="HTML" className="item" data-ts-item="">
                                                                                    HTML
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-tags-ts-dropdown"
                                                                                    id="select-tags-ts-control"
                                                                                    placeholder="Select a date"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-tags-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Advanced tags input</label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select tomselected ts-hidden-accessible"
                                                                            placeholder="Select a date"
                                                                            id="select-tags-advanced"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option value="JavaScript">JavaScript</option>
                                                                            <option value="CSS">CSS</option>
                                                                            <option value="jQuery">jQuery</option>
                                                                            <option value="Bootstrap">Bootstrap</option>
                                                                            <option value="Ruby">Ruby</option>
                                                                            <option value="Python">Python</option>
                                                                            <option value="HTML">HTML</option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value="HTML" className="item" data-ts-item="">
                                                                                    HTML
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-tags-advanced-ts-dropdown"
                                                                                    id="select-tags-advanced-ts-control"
                                                                                    placeholder="Select a date"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-tags-advanced-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Advanced select</label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select tomselected ts-hidden-accessible"
                                                                            placeholder="Select a date"
                                                                            id="select-users"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option value={2}>Elon Musk</option>
                                                                            <option value={3}>Paweł Kuna</option>
                                                                            <option value={4}>Nikola Tesla</option>
                                                                            <option value={1}>Chuck Tesla</option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value={1} className="item" data-ts-item="">
                                                                                    Chuck Tesla
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-users-ts-dropdown"
                                                                                    id="select-users-ts-control"
                                                                                    placeholder="Select a date"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-users-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Advanced select with optgroup
                                                                        </label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select tomselected ts-hidden-accessible"
                                                                            placeholder="Select a date"
                                                                            id="select-optgroups"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <optgroup label="Tags">
                                                                                <option value="JavaScript">JavaScript</option>
                                                                                <option value="CSS">CSS</option>
                                                                                <option value="jQuery">jQuery</option>
                                                                                <option value="Bootstrap">Bootstrap</option>
                                                                                <option value="Ruby">Ruby</option>
                                                                                <option value="Python">Python</option>
                                                                            </optgroup>
                                                                            <optgroup label="People">
                                                                                <option value="Chuck Tesla">Chuck Tesla</option>
                                                                                <option value="Elon Musk">Elon Musk</option>
                                                                                <option value="Paweł Kuna">Paweł Kuna</option>
                                                                                <option value="Nikola Tesla">Nikola Tesla</option>
                                                                            </optgroup>
                                                                            <option value="HTML">HTML</option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value="HTML" className="item" data-ts-item="">
                                                                                    HTML
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-optgroups-ts-dropdown"
                                                                                    id="select-optgroups-ts-control"
                                                                                    placeholder="Select a date"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-optgroups-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Select with avatars</label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select tomselected ts-hidden-accessible"
                                                                            placeholder="Select a date"
                                                                            id="select-people"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option
                                                                                value={2}
                                                                                data-custom-properties='<span class="avatar avatar-xs">JL</span>'
                                                                            >
                                                                                Jeffie Lewzey
                                                                            </option>
                                                                            <option
                                                                                value={3}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/002m.jpg)"></span>'
                                                                            >
                                                                                Mallory Hulme
                                                                            </option>
                                                                            <option
                                                                                value={4}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/003m.jpg)"></span>'
                                                                            >
                                                                                Dunn Slane
                                                                            </option>
                                                                            <option
                                                                                value={5}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/000f.jpg)"></span>'
                                                                            >
                                                                                Emmy Levet
                                                                            </option>
                                                                            <option
                                                                                value={6}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/001f.jpg)"></span>'
                                                                            >
                                                                                Maryjo Lebarree
                                                                            </option>
                                                                            <option
                                                                                value={7}
                                                                                data-custom-properties='<span class="avatar avatar-xs">EP</span>'
                                                                            >
                                                                                Egan Poetz
                                                                            </option>
                                                                            <option
                                                                                value={8}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/002f.jpg)"></span>'
                                                                            >
                                                                                Kellie Skingley
                                                                            </option>
                                                                            <option
                                                                                value={9}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/003f.jpg)"></span>'
                                                                            >
                                                                                Christabel Charlwood
                                                                            </option>
                                                                            <option
                                                                                value={10}
                                                                                data-custom-properties='<span class="avatar avatar-xs">HS</span>'
                                                                            >
                                                                                Haskel Shelper
                                                                            </option>
                                                                            <option
                                                                                value={11}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/006m.jpg)"></span>'
                                                                            >
                                                                                Lorry Mion
                                                                            </option>
                                                                            <option
                                                                                value={12}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/004f.jpg)"></span>'
                                                                            >
                                                                                Leesa Beaty
                                                                            </option>
                                                                            <option
                                                                                value={13}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/007m.jpg)"></span>'
                                                                            >
                                                                                Perren Keemar
                                                                            </option>
                                                                            <option
                                                                                value={14}
                                                                                data-custom-properties='<span class="avatar avatar-xs">SA</span>'
                                                                            >
                                                                                Sunny Airey
                                                                            </option>
                                                                            <option
                                                                                value={15}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/009m.jpg)"></span>'
                                                                            >
                                                                                Geoffry Flaunders
                                                                            </option>
                                                                            <option
                                                                                value={16}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/010m.jpg)"></span>'
                                                                            >
                                                                                Thatcher Keel
                                                                            </option>
                                                                            <option
                                                                                value={17}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/005f.jpg)"></span>'
                                                                            >
                                                                                Dyann Escala
                                                                            </option>
                                                                            <option
                                                                                value={18}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/006f.jpg)"></span>'
                                                                            >
                                                                                Avivah Mugleston
                                                                            </option>
                                                                            <option
                                                                                value={19}
                                                                                data-custom-properties='<span class="avatar avatar-xs">AA</span>'
                                                                            >
                                                                                Arlie Armstead
                                                                            </option>
                                                                            <option
                                                                                value={20}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/008f.jpg)"></span>'
                                                                            >
                                                                                Tessie Curzon
                                                                            </option>
                                                                            <option
                                                                                value={1}
                                                                                data-custom-properties='<span class="avatar avatar-xs" style="background-image: url(./static/avatars/000m.jpg)"></span>'
                                                                            >
                                                                                Paweł Kuna
                                                                            </option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value={1} className="item" data-ts-item="">
                                                                                    <span className="dropdown-item-indicator">
                                                                                        <span
                                                                                            className="avatar avatar-xs"
                                                                                            style={{
                                                                                                backgroundImage:
                                                                                                    "url(./static/avatars/000m.jpg)"
                                                                                            }}
                                                                                        />
                                                                                    </span>
                                                                                    Paweł Kuna
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-people-ts-dropdown"
                                                                                    id="select-people-ts-control"
                                                                                    placeholder="Select a date"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-people-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Select with flags</label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select tomselected ts-hidden-accessible"
                                                                            id="select-countries"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option
                                                                                value="de"
                                                                                data-custom-properties='<span class="flag flag-xs flag-country-de"></span>'
                                                                            >
                                                                                Germany
                                                                            </option>
                                                                            <option
                                                                                value="cz"
                                                                                data-custom-properties='<span class="flag flag-xs flag-country-cz"></span>'
                                                                            >
                                                                                Czech Republic
                                                                            </option>
                                                                            <option
                                                                                value="br"
                                                                                data-custom-properties='<span class="flag flag-xs flag-country-br"></span>'
                                                                            >
                                                                                Brazil
                                                                            </option>
                                                                            <option
                                                                                value="pl"
                                                                                data-custom-properties='<span class="flag flag-xs flag-country-pl"></span>'
                                                                            >
                                                                                Poland
                                                                            </option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value="pl" className="item" data-ts-item="">
                                                                                    <span className="dropdown-item-indicator">
                                                                                        <span className="flag flag-xs flag-country-pl" />
                                                                                    </span>
                                                                                    Poland
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-countries-ts-dropdown"
                                                                                    id="select-countries-ts-control"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-countries-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Select with labels</label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select tomselected ts-hidden-accessible"
                                                                            id="select-labels"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option
                                                                                value="paste"
                                                                                data-custom-properties='<span class="badge bg-blue-lt">cmd + V</span>'
                                                                            >
                                                                                Paste
                                                                            </option>
                                                                            <option
                                                                                value="cut"
                                                                                data-custom-properties='<span class="badge bg-blue-lt">cmd + X</span>'
                                                                            >
                                                                                Cut
                                                                            </option>
                                                                            <option
                                                                                value="copy"
                                                                                data-custom-properties='<span class="badge bg-blue-lt">cmd + C</span>'
                                                                            >
                                                                                Copy
                                                                            </option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value="copy" className="item" data-ts-item="">
                                                                                    <span className="dropdown-item-indicator">
                                                                                        <span className="badge bg-blue-lt">cmd + C</span>
                                                                                    </span>
                                                                                    Copy
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-labels-ts-dropdown"
                                                                                    id="select-labels-ts-control"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-labels-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Advanced select with validation state
                                                                        </label>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select mb-3 is-valid tomselected ts-hidden-accessible"
                                                                            id="select-countries-valid"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option value="de">Germany</option>
                                                                            <option value="cz">Czech Republic</option>
                                                                            <option value="br">Brazil</option>
                                                                            <option value="pl">Poland</option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select mb-3 is-valid single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value="pl" className="item" data-ts-item="">
                                                                                    Poland
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-countries-valid-ts-dropdown"
                                                                                    id="select-countries-valid-ts-control"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-countries-valid-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <select
                                                                            type="text"
                                                                            className="form-select is-invalid tomselected ts-hidden-accessible"
                                                                            id="select-countries-invalid"
                                                                            value=""
                                                                            tabIndex={-1}
                                                                        >
                                                                            <option value="de">Germany</option>
                                                                            <option value="cz">Czech Republic</option>
                                                                            <option value="br">Brazil</option>
                                                                            <option value="pl">Poland</option>
                                                                        </select>
                                                                        <div className="ts-wrapper form-select is-invalid single input-hidden full has-items">
                                                                            <div className="ts-control">
                                                                                <div data-value="pl" className="item" data-ts-item="">
                                                                                    Poland
                                                                                </div>
                                                                                <input
                                                                                    tabIndex={0}
                                                                                    role="combobox"
                                                                                    aria-haspopup="listbox"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="select-countries-invalid-ts-dropdown"
                                                                                    id="select-countries-invalid-ts-control"
                                                                                    type="select-one"
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="dropdown-menu ts-dropdown single"
                                                                                style={{ display: "none" }}
                                                                            >
                                                                                <div
                                                                                    role="listbox"
                                                                                    tabIndex={-1}
                                                                                    className="ts-dropdown-content"
                                                                                    id="select-countries-invalid-ts-dropdown"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-end">
                                                    <div className="d-flex">
                                                        <a href="#" className="btn btn-link">
                                                            Cancel
                                                        </a>
                                                        <button type="submit" className="btn btn-primary ms-auto">
                                                            Send data
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="card-title">Project ID</h3>
                                                    <p className="card-subtitle">Used when interacting with the API.</p>
                                                    <div className="input-icon">
                                                        <input
                                                            type="text"
                                                            defaultValue="prj_5ae74426fe935327a8fa178b07d84ad9"
                                                            className="form-control"
                                                            placeholder="Search…"
                                                            readOnly=""
                                                        />
                                                        <span className="input-icon-addon">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/files */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <desc>
                                                                    Download more icon variants from
                                                                    https://tabler-icons.io/i/files
                                                                </desc>
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                                                                <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                                                                <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            Learn more about <a href="#">Project ID</a>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="#" className="btn btn-primary">
                                                                Save
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="card-title">Node.js Version</h3>
                                                    <p className="card-subtitle">
                                                        The version of Node.js that is used in the Build Step and for
                                                        Serverless Functions. A new Deployment is required for your changes
                                                        to take effect.
                                                    </p>
                                                    <select className="form-select">
                                                        <option>14.x</option>
                                                        <option>12.x</option>
                                                    </select>
                                                </div>
                                                <div className="card-footer">
                                                    Learn more about <a href="#">Node.js Version</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Basic form</h3>
                                                </div>
                                                <div className="card-body">
                                                    <form>
                                                        <div className="form-group mb-3 ">
                                                            <label className="form-label">Email address</label>
                                                            <div>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter email"
                                                                />
                                                                <small className="form-hint">
                                                                    We'll never share your email with anyone else.
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 ">
                                                            <label className="form-label">Password</label>
                                                            <div>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    placeholder="Password"
                                                                />
                                                                <small className="form-hint">
                                                                    Your password must be 8-20 characters long, contain letters
                                                                    and numbers, and must not contain spaces, special characters,
                                                                    or emoji.
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 ">
                                                            <label className="form-label">Select</label>
                                                            <div>
                                                                <select className="form-select">
                                                                    <option>Option 1</option>
                                                                    <optgroup label="Optgroup 1">
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                    </optgroup>
                                                                    <option>Option 2</option>
                                                                    <optgroup label="Optgroup 2">
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                    </optgroup>
                                                                    <optgroup label="Optgroup 3">
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                    </optgroup>
                                                                    <option>Option 3</option>
                                                                    <option>Option 4</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label className="form-label">Checkboxes</label>
                                                            <div>
                                                                <label className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked=""
                                                                    />
                                                                    <span className="form-check-label">Option 1</span>
                                                                </label>
                                                                <label className="form-check">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-label">Option 2</span>
                                                                </label>
                                                                <label className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        disabled=""
                                                                    />
                                                                    <span className="form-check-label">Option 3</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-footer">
                                                            <button type="submit" className="btn btn-primary">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Horizontal form</h3>
                                                </div>
                                                <div className="card-body">
                                                    <form>
                                                        <div className="form-group mb-3 row">
                                                            <label className="form-label col-3 col-form-label">
                                                                Email address
                                                            </label>
                                                            <div className="col">
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter email"
                                                                />
                                                                <small className="form-hint">
                                                                    We'll never share your email with anyone else.
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 row">
                                                            <label className="form-label col-3 col-form-label">
                                                                Password
                                                            </label>
                                                            <div className="col">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    placeholder="Password"
                                                                />
                                                                <small className="form-hint">
                                                                    Your password must be 8-20 characters long, contain letters
                                                                    and numbers, and must not contain spaces, special characters,
                                                                    or emoji.
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3 row">
                                                            <label className="form-label col-3 col-form-label">Select</label>
                                                            <div className="col">
                                                                <select className="form-select">
                                                                    <option>Option 1</option>
                                                                    <optgroup label="Optgroup 1">
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                    </optgroup>
                                                                    <option>Option 2</option>
                                                                    <optgroup label="Optgroup 2">
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                    </optgroup>
                                                                    <optgroup label="Optgroup 3">
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                    </optgroup>
                                                                    <option>Option 3</option>
                                                                    <option>Option 4</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="form-label col-3 col-form-label pt-0">
                                                                Checkboxes
                                                            </label>
                                                            <div className="col">
                                                                <label className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked=""
                                                                    />
                                                                    <span className="form-check-label">Option 1</span>
                                                                </label>
                                                                <label className="form-check">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-label">Option 2</span>
                                                                </label>
                                                                <label className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        disabled=""
                                                                    />
                                                                    <span className="form-check-label">Option 3</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-footer">
                                                            <button type="submit" className="btn btn-primary">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default App;