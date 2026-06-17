window.liveAtlasConfig = {
	// By default LiveAtlas looks for a dynmap standalone/config.js file
    // This configuration can be used instead to support Pl3xmap and Squaremap installations as well as multiple servers (external webserver required)
    // To configure multiple servers, see https://github.com/JLyne/LiveAtlas/wiki/Configuring-Multiple-Servers.

    // Example Squaremap internal webserver configuration
    // servers: {
    //   squaremap: {
    // 	   squaremap: window.location.pathname
    //   },
    // },

    // Example Pl3xmap internal webserver configuration
    // servers: {
    //   pl3xmap: {
    // 	   pl3xmap: window.location.pathname
    //   },
    // },

    // Example Overviewer configuration
    // servers: {
    //   overviewer: {
    // 	   overviewer: window.location.pathname
    //   },
    // },

    // Example Dynmap internal webserver configuration without using standalone/config.js
    // servers: {
    //   dynmap: {
    //     dynmap: {
    //       configuration: 'standalone/dynmap_config.json?_={timestamp}',
    //       update: 'standalone/dynmap_{world}.json?_={timestamp}',
    //       sendmessage: 'standalone/sendmessage.php',
    //       login: 'standalone/login.php',
    //       register: 'standalone/register.php',
    //       tiles: 'tiles/',
    //       markers: 'tiles/'
    //     }
    //   },
    // },

    // Example multiple Dynmap servers on external webserver configuration
    // servers: {
    //   creative: {
    //     label: 'Creative',
    //     dynmap: {
    //         configuration: 'http://dynmap.local/standalone/creative/MySQL_configuration.php',
    //         update: 'http://dynmap.local/standalone/creative/MySQL_update.php?world={world}&ts={timestamp}',
    //         sendmessage: 'http://dynmap.local/standalone/creative/MySQL_sendmessage.php',
    //         login: 'http://dynmap.local/standalone/creative/MySQL_login.php',
    //         register: 'http://dynmap.local/standalone/creative/MySQL_register.php',
    //         tiles: 'http://dynmap.local/standalone/creative/MySQL_tiles.php?tile=',
    //         markers: 'http://dynmap.local/standalone/creative/MySQL_markers.php?marker='
    //     }
    //   },
    //   survival: {
    //     label: 'Survival',
    //     dynmap: {
    //         configuration: 'http://dynmap.local/standalone/survival/MySQL_configuration.php',
    //         update: 'http://dynmap.local/standalone/survival/MySQL_update.php?world={world}&ts={timestamp}',
    //         sendmessage: 'http://dynmap.local/standalone/survival/MySQL_sendmessage.php',
    //         login: 'http://dynmap.local/standalone/survival/MySQL_login.php',
    //         register: 'http://dynmap.local/standalone/survival/MySQL_register.php',
    //         tiles: 'http://dynmap.local/standalone/survival/MySQL_tiles.php?tile=',
    //         markers: 'http://dynmap.local/standalone/survival/MySQL_markers.php?marker='
		//     }
    //   },
    // },

    // These messages are used throughout LiveAtlas and can be translated here
    // If a message you want to translate isn't here, it is likely controlled by dynmap itself
    // see https://github.com/webbukkit/dynmap/wiki/Configuration.txt
    messages: {
    	chatNoMessages: 'No chat messages yet...',
        chatTitle: 'Chat',
        chatLogin: 'Please login to send chat messages',
        chatSend: 'Send',
        chatPlaceholder: 'Type your chat message here...',
        chatErrorUnknown: 'Unexpected error while sending chat message',
        chatErrorDisabled: 'Chat is not enabled',
    	serversHeading: 'Servers',
        markersHeading: 'Markers',
        markersSearchPlaceholder: 'Search markers...',
        markersSkeleton: 'No markers exist for the current world',
        markersSetSkeleton: 'This marker set is empty',
        markersSearchSkeleton: 'No matching markers found',
        markersUnnamed: '(Unnamed marker)',
        worldsSkeleton: 'No maps have been configured',
        playersSkeleton: 'No players are currently online',
        playersTitle: 'Click to center on player\nDouble-click to follow player',
        playersTitleHidden: 'This player is currently hidden from the map\nDouble-click to follow player when they become visible',
        playersTitleOtherWorld: 'This player is in another world.\nClick to center on player\nDouble-click to follow player',
        playersSearchPlaceholder: 'Search players...',
        playersSearchSkeleton: 'No matching players found',
        followingHeading: 'Following',
        followingUnfollow: 'Unfollow',
        followingTitleUnfollow: 'Stop following this player',
        followingHidden: 'Currently hidden',
        linkTitle: 'Copy link to current location',
        loadingTitle: 'Loading...',
        locationRegion: 'Region',
        locationChunk: 'Chunk',
        contextMenuCopyLink: 'Copy link to here',
        contextMenuCenterHere: 'Center here',
        toggleTitle: 'Click to toggle this section',
        mapTitle: 'Map - Use the arrow keys to pan the map',
        layersTitle: 'Layers',
        copyToClipboardSuccess: 'Copied to clipboard',
        copyToClipboardError: 'Unable to copy to clipboard',

        loginTitle: 'Login/Register',
        loginHeading: 'Existing User',
        loginUsernameLabel: 'Username',
        loginPasswordLabel: 'Password',
        loginSubmit: 'Login',
        loginErrorUnknown: 'Unexpected error while logging in',
        loginErrorDisabled: 'Logging in is disabled on this server',
        loginErrorIncorrect: 'Incorrect username or password',
        loginSuccess: 'Logged in successfully',

        registerHeading: 'New User',
        registerDescription: `Enter your username and password, along with your registration code.

                You can get a registration code by running /dynmap webregister in-game.`,
        registerConfirmPasswordLabel: 'Confirm Password',
        registerCodeLabel: 'Registration Code',
        registerSubmit: 'Register',
        registerErrorUnknown: 'Unexpected error during registration',
        registerErrorDisabled: 'Registration is disabled on this server',
        registerErrorVerifyFailed: 'The entered passwords do not match',
        registerErrorIncorrect: 'Registration failed, please check the entered details are correct',

        logoutTitle: 'Logout',
        logoutErrorUnknown: 'Unexpected error while logging out',
        logoutSuccess: 'Logged out successfully',

        closeTitle: 'Close',
        showMore: 'Show more'
    },

    ui: {
    	// If true, player markers will always be displayed in front of other marker types
    	playersAboveMarkers: true,

        // Whether to enable the player list search box
        playersSearch: true,

        // Use more compact pre-2.0 player marker style
        compactPlayerMarkers: false,

        // Disable the map right click menu
        disableContextMenu: false,

        // Disable the markers button and list
        disableMarkerUI: false,

        // Custom URL to redirect to when logging in is required
        // This URL will need to handle the login process and redirect users back to LiveAtlas
        customLoginUrl: null
    },

    // Config version. Do not modify.
    version: 1
};
