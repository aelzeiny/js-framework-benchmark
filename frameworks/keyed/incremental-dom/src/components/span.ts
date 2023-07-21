import { elementOpen } from "incremental-dom";

export function GlyphIconSpan() {
    elementOpen(
        'span', null, null,
        // attributes
        'class', 'preloadicon glyphicon glyphicon-remove',
        'aria-hidden', 'true'
    );

    close();
    // <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
}