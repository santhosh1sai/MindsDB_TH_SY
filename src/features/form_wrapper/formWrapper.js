import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPage0 } from '../home/homeSlice'

export function FormWrapper() {
    const product = useSelector((state) => state.home.product)
    const dispatch = useDispatch()

    return (
        <div class="form-wrapper container">
            <div class="form-block">
                <div class="form-heading">
                    <i class="icon-form" onClick={() => dispatch(setPage0())}></i>
                    <h2>add credentials</h2>
                </div>
                <div class="credential-form">
                    <div class="form-product">
                        <div class="form-product-name">
                            <div class="product-icon">
                                <img src={product.src} alt={product.alt} />
                            </div>
                            <h2>{product.name}</h2>
                        </div>
                        <button>Change</button>
                    </div>
                    <form action="#">
                        <div class="input-block">
                            <div class="form-input">
                                <label for="host">Host</label>
                                <input type="text" id="host" name="host" value="ex. 3.220.66.106" />
                            </div>
                            <div class="form-input">
                                <label for="port">Port</label>
                                <input type="text" id="port" name="port" value="5432" />
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="form-input">
                                <label for="database">Database</label>
                                <input type="text" id="database" name="database" value="demo" />
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="form-input">
                                <label for="uname">Username</label>
                                <input type="text" id="username" name="username" value="" />
                            </div>
                            <div class="form-input">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" value="" />
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="form-input">
                                <label for="Connection">Connection name</label>
                                <input type="text" id="home_rentals_demo" name="home_rentals_demo" value="home_rentals_demo" />
                            </div>
                        </div>
                        <div class="form-bottom">
                            <p>Think of this as an alias on the MindsDB server</p>
                            <div class="check-connection">
                                <button>Test Connection</button>
                                <span class="connect">Connected</span>
                                <span class="fail">Failed</span>
                            </div>
                            <button type="submit">
                                Save and Continue
                                <i class="icon-submit"></i>
                            </button>
                        </div>
                    </form>
                    <div class="error-message">
                        <i class="icon-error"></i>
                        <div class="error-text">
                            <h2>Verification failed!</h2>
                            <p>FATAL: password authentication failed for user "demo_use"</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-sidebar">
                <div class="help-block">
                    <h2>Need help?</h2>
                    <div class="help-list">
                        <i class="icon-read"></i>
                        <p>Read our docs</p>
                    </div>
                    <div class="help-list">
                        <i class="icon-chat"></i>
                        <p>Chat with us</p>
                    </div>
                </div>
                <div class="sidebar-text">
                    <p>If you maintain an IP whitelist, may by you'll need to whitelist MindsDB static IPs:</p>
                </div>
                <div class="ip-address">
                    <div class="ip-list">
                        <p>18.220.205.95,</p>
                        <p>3.19.152.46,</p>
                        <p>52.14.91.162</p>
                    </div>
                    <i class="icon-ip"></i>
                </div>
            </div>
        </div>
    )
}